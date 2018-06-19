const EvaluatedOpportunityModel = require('../models/evaluated-opportunity');
const AvailableOpportunitiesManager = require('./available-opportunities-manager');
const OfficesManager = require('./offices-manager');
const fastCsv = require('fast-csv');
const toStream = require('buffer-to-stream');



class EvaluatedOpportunitiesManager {
    async get(id) {
        try {
            return await EvaluatedOpportunityModel.findById(id);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // async deleteAll() {
    //     try {
    //         return await EvaluatedOpportunityModel.remove({});
    //     } catch (error) {
    //         console.error(error);
    //         throw error;
    //     }
    // }

    // async findByZipCode(zipCode) {
    //     try {
    //         return await EvaluatedOpportunityModel.findOne({zipCode: zipCode});
    //     } catch (error) {
    //         console.error(error);
    //         throw error;
    //     }
    // }

    async create(evaluatedOpportunityTemplate) {
        try {
            const office = new EvaluatedOpportunityModel(evaluatedOpportunityTemplate);
            // return await office.save().then((office) => {return office;});
            return await office.save();
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    evaluateMsa(match, msaMatch, msaOpportunity, msaEval) {
      if (!match) return msaMatch ? (msaOpportunity === msaEval) : msaMatch;
      return match
    }

    async evaluate(template) {
        try{
            const _self = this;
            console.log(template);
            const type = template.locate.name;
            template.match = false;
            template.reach = type;
            for (let i = 0; i < template.categories.length; i++) {
                const opportunity = await AvailableOpportunitiesManager.findByRange(template.categories[i].range);
                let match = false;
                if (opportunity) {
                    if (opportunity.global && type === 'global') {
                        match = true;
                    }
                    if (!match && opportunity.national  && type === 'national') {
                        match = true;
                    }
                    if (!match && opportunity.local && type === 'local') {
                        const zipCode = (template.locate.anotherCityZipCode && template.locate.anotherCityZipCode !=='') ? template.locate.anotherCityZipCode : template.formZipCode;
                        const msa = await OfficesManager.findByZipCode(zipCode);
                        if (msa) {
                          match = _self.evaluateMsa(match, opportunity.dc, msa.msa, '47900');
                          match = _self.evaluateMsa(match, opportunity.atl, msa.msa, '12060');
                          match = _self.evaluateMsa(match, opportunity.bos, msa.msa, '14460');
                          match = _self.evaluateMsa(match, opportunity.nyc, msa.msa, '35620');
                          match = _self.evaluateMsa(match, opportunity.chi, msa.msa, '16980');
                          match = _self.evaluateMsa(match, opportunity.sea, msa.msa, '42660');
                          match = _self.evaluateMsa(match, opportunity.atx, msa.msa, '12420');
                          match = _self.evaluateMsa(match, opportunity.lax, msa.msa, '31100');
                          match = _self.evaluateMsa(match, opportunity.mpk, msa.msa, '41860');
                          match = _self.evaluateMsa(match, opportunity.eag_dc, msa.msa, '39340');
                          match = _self.evaluateMsa(match, opportunity.pnb_dc, msa.msa, '36540');
                          match = _self.evaluateMsa(match, opportunity.frc_dc, msa.msa, '16740');
                          match = _self.evaluateMsa(match, opportunity.alt_dc, msa.msa, '19780');
                          match = _self.evaluateMsa(match, opportunity.nao_dc, msa.msa, '18140');
                          match = _self.evaluateMsa(match, opportunity.vll_dc, msa.msa, '10740');
                          match = _self.evaluateMsa(match, opportunity.rva_dc, msa.msa, '40060');
                          match = _self.evaluateMsa(match, opportunity.ftw_dc, msa.msa, '19100');
                          match = _self.evaluateMsa(match, opportunity.prn_dc, msa.msa, '13460');
                          match = _self.evaluateMsa(match, opportunity.hna_dc, msa.msa, '26620');

                          }
                    }
                    template.match = match;
                    const created = await this.create(template);
                    console.log(created);
                }
                console.log('Match:',match);
                return {match, opportunity};
            }
        }
          catch(e) {
            console.error(e);
          }
    }

    async export(stream) {
        const records = await EvaluatedOpportunityModel.find({}).lean();
        console.log(JSON.stringify(records));
        const csvStream = fastCsv.createWriteStream({ headers: true,
          transform: function (row) {
            return {
              ID: row._id,
              confirmationID: row.confirmationID,
              formAddress: row.formAddress,
              formCompany: row.formCompany,
              formFullName: row.formFullName,
              formCity: row.formCity,
              formState: row.formState,
              formZipCode: row.formZipCode,
              categories1_Range: row.categories[0].range,
              categories1_tax: row.categories[0].tax,
              officeData: row.officeData,
              match: row.match,
              reach: row.reach,
              createdAt: row.createdAt,
              updatedAt: row.updatedAt

            };
          }
        },
          function (err, data) {
            console.log(data); //"A,B\na1,b1\na2,b2\n"
          }
        );

        return new Promise((resolve, reject) => {
            stream.on('finish', () => {
                resolve(true);
            });
            csvStream.pipe(stream);
            for (let i = 0; i < records.length; i++) {
                csvStream.write(records[i]);
            }
            csvStream.end();
        });
    }

    // async ingest(object) {
    //     const self = this;
    //     const deleted = await this.deleteAll();
    //     const is = toStream(object);
    //     let counter = 0;
    //     return new Promise((resolve, reject) => {
    //         const cvsStream = fastCsv()
    //             .on('data', (data) => {
    //                 if (counter > 4) {
    //                     self.create({
    //                         range: data[0],
    //                         global: data[4],
    //                         national: data[5],
    //                         local: data[6],
    //                         dc: data[7],
    //                         mia: data[7],
    //                         atl: data[8],
    //                         bos: data[9],
    //                         nyc: data[10],
    //                         chi: data[11],
    //                         sea: data[12],
    //                         atx: data[13],
    //                         lax: data[14],
    //                         mpk: data[15]
    //                     });
    //                 }
    //                 counter++;
    //             })
    //             .on('end', () => {
    //                 console.log('Available Opportunities ingestion complete');
    //             })
    //         is.pipe(cvsStream);
    //     });
    // }
}

module.exports = new EvaluatedOpportunitiesManager();
