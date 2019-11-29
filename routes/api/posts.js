const express = require('express');
const router = express.Router();

// @Route  GET api/posts
// @Desc   Test route
// @Access Public

router.get('/', (req, res) => {
  res.send('posts route');
});

module.exports = router;
