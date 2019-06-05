const express = require("express");
const router = express.Router();

// @route  GET api/post/test
// @desc   Tests post route/Тестовый запрос для постов
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
