const express = require('express');
const router = express.Router();

// @route    GET api/v1/properties
// @desc     Test route
// @access   Public

router.get('/', (req, res) => res.send('Properties route'));

module.exports = router;
