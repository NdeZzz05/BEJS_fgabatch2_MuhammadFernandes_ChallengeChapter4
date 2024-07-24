const POOL = require("../db");

getCustomer = async (req, res) => {
  try {
    const result = await POOL.query(`select *
        from customer
        inner join address on customer.id_address = address.id
      `);
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
    const result = await POOL.query(
      `select *
	from customer
	inner join address on customer.id_address = address.id
	where customer.id = $1;
          `,
      [id]
    );
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
