const POOL = require("../config/db");
const CUSTOMER = require("../models/customer.model");

getCustomer = async (req, res) => {
  try {
    // sebelum dipisah/tidak menggunakan folder models
    // const result = await POOL.query(`select *
    //     from customer
    //     inner join address on customer.id_address = address.id
    //   `);

    // sesudah dipisah & menggunakan folder models
    const result = await CUSTOMER.index();
    res.status(200).json({
      success: true,
      message: "Berhasil mendapatakan customer",
      data: result.rows,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

getCustomerDetail = async (req, res) => {
  const { id } = req.params;
  try {
    // sebelum dipisah/tidak menggunakan folder models
    //   const result = await POOL.query(
    //     `select *
    // from customer
    // inner join address on customer.id_address = address.id
    // where customer.id = $1;
    //         `,
    //     [id]
    //   );

    // sesudah dipisah & menggunakan folder models
    const result = await CUSTOMER.getById(id);
    res.status(200).json({
      success: true,
      message: "Berhasil mendapatakan detail customer",
      data: result.rows,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getCustomer,
  getCustomerDetail,
};
