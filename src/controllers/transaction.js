const { transaction, user } = require("../../models");

exports.addTransaction = async (req, res) => {
  try {
    const newTransaction = await transaction.create(req.body);

    const data = await transaction.findOne({
      where: {
        id: newTransaction.id,
      },
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId"],
      },
    });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server error",
    });
  }
};

exports.getTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await transaction.findOne({
      where: {
        id,
      },
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId"],
      },
    });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server error",
    });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const data = await transaction.findAll({
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId"],
      },
    });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server error",
    });
  }
};

exports.updateTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    await transaction.update(req.body, {
      where: {
        id,
      },
    });

    const data = await transaction.findOne({
      where: {
        id,
      },
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId"],
      },
    });

    res.send({
      status: "Failed",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server error",
    });
  }
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    await transaction.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "Success",
      message: "Delete Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server error",
    });
  }
};
