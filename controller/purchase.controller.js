const Joi = require('joi');
const blogServices = require('../services/blog.services');
const purchaseServices = require('../services/purchase.services');
const purchaseModel = require('../models/purchase');

const savePurchaseData = async (req, res, next) => {

    const datas = {
        clothesId: req.body.clothesId,
        userId: req.tokenData.userId
    }

    try {
        const data = await purchaseServices.savePurchaseServices(datas);
        return res.status(201).send({
            status: 201,
            message: 'Data saved'
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            status: 400,
            error: err
        });
    };
};


const getPurchasesData = async (req, res, next) => {
    try {
        const PurchasesData = await purchaseModel.findOne({ userId: req.tokenData.userId }).populate('clothesId');

        console.log('PurchasesData', PurchasesData);

        return res.status(200)
            .send({
                status: 200,
                PurchasesData
            })
    } catch (err) {
        return res.status(400).send({
            status: 400,
            message: err
        })
    };
};

module.exports = {
    savePurchaseData,
    getPurchasesData
};
