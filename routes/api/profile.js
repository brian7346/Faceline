const express = require("express");
const router = express.Router();

// @route  GET api/prolile/test
// @desc   Tests prolile route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
