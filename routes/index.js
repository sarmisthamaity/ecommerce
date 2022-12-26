const router = require('express').Router();

const blogRoute = require('./blog.route');
const routes = require('./user.routes');
const purchaseRoute = require('./purchase.route');

router.use('/', routes);
router.use('/', blogRoute);
router.use('/', purchaseRoute);

module.exports = router;
