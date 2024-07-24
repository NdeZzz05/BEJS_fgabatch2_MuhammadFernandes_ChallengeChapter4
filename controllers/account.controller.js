const POOL = require("../db");

const RESPONSE = (res, message, data) => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};

getAccount = async (req, res) => {
  try {
    const result = await POOL.query(`select *
            from account
            inner join customer on account.id_customer = customer.id
          `);
    RESPONSE(res, "Success get all account", result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

getDetailAccount = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await POOL.query(
      `select *
              from account
              where account.id = $1;
            `,
      [id]
    );
    res.status(200).json({
      success: true,
      message: "Success get detail account",
      data: result.rows,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

createAccount = async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const result = await POOL.query(
      `insert into
              account
              (balance, pin, id_customer, id_account_type)
              values
              ($1, $2, $3, $4);
            `,
      [body.balance, body.pin, body.id_customer, body.id_account_type]
    );
    res.status(200).json({
      success: true,
      message: "Success create new account",
      data: result.rows,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { getAccount, getDetailAccount, createAccount };
