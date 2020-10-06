const express = require('express');
const request = require('request');
const router = express.Router();

// @route    GET api/v1/properties
// @desc     Test route
// @access   Public

router.get('/', (req, res) => res.send('Properties route'));

// @todo GET madera/properties
// @route api/v1/properties/madera
// @desc Get a list of properties managed by Madera
// @access Private

// See video 23 Get Github Repos profile

router.get('/madera/:madera_id', (req, res) => {
  try {
    const options = {
      uri: `https://newco.maderaresidential.com/api/${req.params.madera_id}`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' }
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: 'No Github profile found' });
      }

      res.json(body);
    });
  } catch (err) {}
});

module.exports = router;
