const express = require('express');
const router = express.Router();

// @Route  GET api/profile
// @Desc   Test route
// @Access Public

router.get('/', (req, res) => {
  res.send('profile route');
});

module.exports = router;
