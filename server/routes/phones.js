const express = require('express');
const router = express.Router();

const PhonesRouter = require("../controllers/phones");

router.get('/', PhonesRouter.getAllPhones);

router.get('/:id', PhonesRouter.getPhoneById);

router.post('/', PhonesRouter.createPhone);

router.put('/:id', PhonesRouter.updatePhone);

router.delete('/:id', PhonesRouter.deletePhone);

module.exports = router;
