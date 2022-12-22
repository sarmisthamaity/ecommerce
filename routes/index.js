const router = require('express').Router();

const blogRoute = require('./blog.route');
const routes = require('./user.routes');

router.use('/', routes);
router.use('/', blogRoute);

module.exports = router;
