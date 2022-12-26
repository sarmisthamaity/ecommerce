const router = require('express').Router();

const { purchaseController } = require('../controller/index');

const Auth = require('../middleware/checkauth');

// To create 
router.post('/purchase', Auth, purchaseController.savePurchaseData);

router.get('/allpurchases', Auth, purchaseController.getPurchasesData)



module.exports = router;
