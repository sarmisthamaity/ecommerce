const clothModel = require('../models/clothes');
const userModel = require('../models/users');

const CreateBlogServices = async(validationOfContent) => {

    try{
        
        const userData = {
            name: validationOfContent.name,
            description: validationOfContent.description,
            file: validationOfContent.file,
            price: validationOfContent.price

        };

        const saveClothes = await clothModel.create(userData);

        return saveClothes;
    } catch(err){
        // console.log(err);
        return err;
    }
}


module.exports = {
    CreateBlogServices,
}
