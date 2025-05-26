const Tshirt = require("../models/tshirts");

exports.getAllTshirts = async (req, res, next) => {
  try {
    const data = await Tshirt.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "Tshirts found",
        payload: data,
      });
    }
    res.status(404).send({
      message: "Tshirts not found",
    });
  } catch (err) {
    res.status(500).send(err);
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
    res.status(404).send({
      message: "Tshirt not found",
    });
  } catch (err) {
    res.status(500).send(err);
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
        })
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Tshirt created",
                payload: result
            })
        }
        res.status(500).send({
            message: "not found",
        })
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.updateTshirt = async (req, res, next) => {
    try {
        const data ={
            customer: req.body.customer,
            color: req.body.color,
            text: req.body.text,
            size: req.body.size,
            logo: req.body.logo,
        }
        const result = await Tshirt.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Tshirt update",
                payload: result
            })
        }
        res.status(500).send({
            message: "not found",
        })
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteTshirt = async (req, res, next) => {
    try {
        const result = await Tshirt.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Tshirt deleted",
                payload: result
            })
        }
        res.status(500).send({
            message: "Tshirt not deleted",
        })
  } catch (err) {
    res.status(500).send(err);
  }
};
