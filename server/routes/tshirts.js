const express = require('express');
const router = express.Router();

const TshirtsRouter = require("../controllers/tshirts");

router.get('/', TshirtsRouter.getAllTshirts);

router.get('/:id', TshirtsRouter.getTshirtById);

router.post('/', TshirtsRouter.createTshirt);

router.put('/:id', TshirtsRouter.updateTshirt);

router.delete('/:id', TshirtsRouter.deleteTshirt);

module.exports = router;
