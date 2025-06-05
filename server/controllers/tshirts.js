const Tshirt = require("../models/tshirts");

exports.getAllTshirts = async (req, res, next) => {
  try {
    const data = await Tshirt.find();
    if (data && data.length > 0) {
      return res.status(200).send({
        message: "Tshirts found",
        payload: data,
      });
    }
    return res.status(404).send({
      message: "No tshirts found",
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.getTshirtById = async (req, res, next) => {
  try {
    const data = await Tshirt.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: "Tshirt found",
        payload: data,
      });
    }
    return res.status(404).send({
      message: "Tshirt not found",
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.createTshirt = async (req, res, next) => {
  try {
    const data = new Tshirt({
      customer: req.body.customer,
      color: req.body.color,
      text: req.body.text,
      size: req.body.size,
      logo: req.body.logo,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        message: "Tshirt created successfully",
        payload: result,
      });
    }
    return res.status(500).send({
      message: "Tshirt could not be created",
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.updateTshirt = async (req, res, next) => {
  try {
    const dataToUpdate = {
      customer: req.body.customer,
      color: req.body.color,
      text: req.body.text,
      size: req.body.size,
      logo: req.body.logo,
    };
    const options = { new: true };
    const result = await Tshirt.findByIdAndUpdate(
      req.params.id,
      dataToUpdate,
      options
    );
    if (result) {
      return res.status(200).send({
        message: "Tshirt updated successfully",
        payload: result,
      });
    }
    return res.status(404).send({
      message: "Tshirt not found, could not update",
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.deleteTshirt = async (req, res, next) => {
  try {
    const result = await Tshirt.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        message: "Tshirt deleted successfully",
        payload: result,
      });
    }
    return res.status(404).send({
      message: "Tshirt not found, could not delete",
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};