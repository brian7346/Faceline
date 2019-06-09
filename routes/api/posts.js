const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
// Модель для поста
const Post = require("../../models/Post");

// validation
const validatePostInput = require("../../validation/post");

// @route  GET api/posts/test
// @desc   Tests post route/Тестовый запрос для постов
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route  POST api/posts
// @desc   Create post / Создание поста
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check validation
    // Проверяем пост
    if (!isValid) {
      //If any errors, send 400 with error object
      // Если есть ошиьки отсылаем статус 400 и объект с ошибками
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
