const router = require('express').Router();

const { blogController } = require('../controller/index');
const Auth = require('../middleware/checkauth');
const upload = require('../middleware/upload');

// To create 
router.post('/blogs', upload.single('file'), Auth, blogController.createBlog);

//all clothes Data
router.get('/allClothes', Auth, blogController.getBlog)

module.exports = router;
