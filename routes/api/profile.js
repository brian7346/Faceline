const express = require("express");
const router = express.Router();

// @route  GET api/prolile/test
// @desc   Tests prolile route/Тестовый запрос для профиля
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
