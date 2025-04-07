const Phone = require("../models/phones");

exports.getAllPhones = async (req, res, next) => {
  try {
    const data = await Phone.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "Phones found",
        payload: data,
      });
    }
    res.status(404).send({
      message: "Phones not found",
    });
  } catch (err) {
    res.staus(500).send(err);
  }
};
exports.getPhoneById = async (req, res, next) => {
  try {
    const data = await Phone.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: "Phone found",
        payload: data,
      });
    }
    res.status(404).send({
      message: "Phone not found",
    });
  } catch (err) {
    res.staus(500).send(err);
  }
};
exports.createPhone = async (req, res, next) => {  
    try {
        const data = new Phone({
            name: req.body.name,
            brand: req.body.brand,
            color: req.body.color,
            storage:req.body.storage,
            price: req.body.price,
        })
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Phone created",
                payload: result
            })
        }
        res.status(500).send({
            message: "not found",
        })
  } catch (err) {
    res.staus(500).send(err);
  }
};
exports.updatePhone = async (req, res, next) => {
    try {
        const data ={
            name: req.body.name,
            brand: req.body.brand,
            color: req.body.color,
            price: req.body.price,
        }
        const result = await Phone.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Phone update",
                payload: result
            })
        }
        res.status(500).send({
            message: "not found",
        })
  } catch (err) {
    res.staus(500).send(err);
  }
};
exports.deletePhone = async (req, res, next) => {
    try {
        const result = await Phone.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "phone deleted",
                payload: result
            })
        }
        res.status(500).send({
            message: "phone not deleted",
        })
  } catch (err) {
    res.status(500).send(err);
  }
};
