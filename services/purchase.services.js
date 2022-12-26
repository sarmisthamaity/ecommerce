// const clothModel = require('../models/clothes');
// const userModel = require('../models/users');
const purchaseModel = require('../models/purchase');

const savePurchaseServices = async(validationOfContent) => {
    
    try{

        const savePurchaseData = await purchaseModel.create(validationOfContent)

        return savePurchaseData;
    } catch(err){
        return err;
    }
}


module.exports = {
    savePurchaseServices,
}
