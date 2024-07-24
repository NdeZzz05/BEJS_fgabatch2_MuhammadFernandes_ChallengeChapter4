const POOL = require("../db");

getTransaction = async (req, res) => {
  try {
    const result = await POOL.query(`select *
            from transaction
            inner join account on transaction.id_account = account.id
          `);
    res.status(200).json({
      success: true,
      message: "Berhasil mendapatkan transaction",
      data: result.rows,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

getDetailTransaction = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await POOL.query(
      `select *
            from transaction
            where id = $1
          `,
      [id]
    );
    res.status(200).json({
      success: true,
      message: "Berhasil mendapatkan detail transaction",
      data: result.rows,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { getTransaction, getDetailTransaction };
