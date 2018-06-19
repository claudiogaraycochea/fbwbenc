const AvailableOpportunityModel = require('../models/available-opportunity');
const fastCsv = require('fast-csv');
const toStream = require('buffer-to-stream');


class AvailableOpportunitiesManager {
  async get(id) {
    try {
      return await AvailableOpportunityModel.findById(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteAll() {
    try {
      return await AvailableOpportunityModel.remove({});
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findByZipCode(zipCode) {
    try {
      return await AvailableOpportunityModel.findOne({zipCode: zipCode});
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findByRange(range) {
    try {
      return await AvailableOpportunityModel.findOne({range: range});
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async create(availableOpportunityTemplate) {
    // console.log('available-opportunities-manager create availableOpportunityTemplate:', availableOpportunityTemplate);
    try {
      const office = new AvailableOpportunityModel(availableOpportunityTemplate);
      // return await office.save().then((office) => {return office;});
      return await office.save();
    } catch (e) {
      console.error(e);
      throw e;
    }

  }

  async ingest(object) {
    // console.log('available-opportunities-manager ingest object:', object);
    const self = this;
    const deleted = await this.deleteAll();
    const is = toStream(object);
    let counter = 0;
    return new Promise((resolve, reject) => {
      const cvsStream = fastCsv()
        .on('data', (data) => {
          // console.log('available-opportunities-manager ingest data:', data);
          if (counter > 8) {
            if (data[0] && typeof data[0] !== 'undefined' && data[1] && typeof data[1] !== 'undefined' && data[2] && typeof data[2] !== 'undefined') {
              self.create({
                range: data[0],
                need: data[4],
                global: data[5],
                national: data[6],
                local: data[7],
                dc: data[8],
                mia: data[9],
                atl: data[10],
                bos: data[11],
                nyc: data[12],
                chi: data[13],
                sea: data[14],
                atx: data[15],
                lax: data[16],
                mpk: data[17],
                eag_dc: data[18],
                pnb_dc: data[19],
                frc_dc: data[20],
                alt_dc: data[21],
                nao_dc: data[22],
                vll_dc: data[23],
                rva_dc: data[24],
                ftw_dc: data[25],
                prn_dc: data[26],
                hna_dc: data[27],
              });
            }
          }
          counter++;
        })
        .on('end', () => {
          console.log('Available Opportunities ingestion complete');
        });
      is.pipe(cvsStream);
    });


  }
}

module.exports = new AvailableOpportunitiesManager();
