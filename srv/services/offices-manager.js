const OfficeModel = require('../models/office');
const fastCsv = require('fast-csv');
const toStream = require('buffer-to-stream');

class OfficesManager {
  async get(id) {
    try {
      return await OfficeModel.findById(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteAll() {
    try {
      return await OfficeModel.remove({});
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findByZipCode(zipCode) {
    try {
      return await OfficeModel.findOne({zipCode: zipCode});
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async create(officeTemplate) {
    // console.log('offices-manager create officeTemplate:', officeTemplate);
    try {
      const office = new OfficeModel(officeTemplate);
      // return await office.save().then((office) => {return office;});
      return await office.save();
    } catch (error) {
      console.error(error);
      throw error;
    }

  }

  async ingest(object) {
    // console.log('offices-manager ingest object:', object);
    const self = this;
    const deleted = await this.deleteAll();
    const is = toStream(object);
    let counter = 0;
    return new Promise((resolve, reject) => {
      const cvsStream = fastCsv()
        .on('data', (data) => {
          if (counter > 0) {
            if (data[0] && typeof data[0] !== 'undefined' && data[1] && typeof data[1] !== 'undefined' && data[2] && typeof data[2] !== 'undefined') {
              self.create({
                msa: data[0],
                office: data[1],
                zipCode: data[2]
              });
            }
          }
          counter++;
        })
        .on('end', () => {
          console.log('Zipcode ingestion complete');
        });
      is.pipe(cvsStream);
    });

    // parser.write(object);
  }
}

module.exports = new OfficesManager();
