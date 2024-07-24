const DB = require("../config/db");

const CUSTOMER = {
  index: async () => {
    try {
      const result = await DB.query("SELECT * FROM customer");
      return result;
    } catch (error) {
      return error;
    }
  },

  // index pakai id
  getById: async (id) => {
    try {
      const result = await DB.query("SELECT * FROM customer WHERE id = $1", [id]);
      return result;
    } catch (error) {
      return error;
    }
  },
};

module.exports = CUSTOMER;
