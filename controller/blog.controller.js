const Joi = require('joi');
const blogServices = require('../services/blog.services');
const clothesModel = require('../models/clothes');

const createBlog = async (req, res, next) => {

    const validation = Joi.object({
        description: Joi.string(),
        file: Joi.string(),
        name: Joi.string(),
        price: Joi.number()
    });

    let validationOfContent = validation.validate(req.body);
    if (validationOfContent.error) {
        return res.status(400).send({
            status: 400,
            error: validationOfContent.error
        });
    } else {
        validationOfContent = validationOfContent.value;
    };
    if(req.file) {
        validationOfContent.file = req.file
    } else {
        validationOfContent.file = null
    }
    try {
        const data = await blogServices.CreateBlogServices(validationOfContent);
        return res.status(201).send({
            status: 201,
            message: 'blog created'
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            status: 400,
            error: err
        });
    };
};


const getBlog = async (req, res, next) => {

    try {
        const clothes = await clothesModel.find()
        return res.status(200)
            .send({
                status: 200,
                clothes
            })
    } catch (err) {
        return res.status(400).send({
            status: 400,
            message: err
        })
    };
};


module.exports = {
    createBlog,
    getBlog
};
