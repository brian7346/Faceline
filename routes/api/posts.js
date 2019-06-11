const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
// Модель для поста
const Post = require("../../models/Post");

// Profile model
// Модель для профиля
const Profile = require("../../models/Profile");

// validation
const validatePostInput = require("../../validation/post");

// @route  GET api/posts/test
// @desc   Tests post route/Тестовый запрос для постов
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route  GET api/posts
// @desc   Get posts / Получение всех постов
// @access Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ nopostfound: "Не найдено ни одного поста" })
    );
});

// @route  GET api/posts/:id
// @desc   Get post by id / Получение поста по id
// @access Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: "Пост с таким ID не найден" })
    );
});

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
      // Если есть ошибки отсылаем статус 400 и объект с ошибками
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

// @route  DELETE api/posts/:id
// @desc   Delete post / Удаление поста
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          //Check for post owner
          //Проверяем, кто удаляет пост
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "Пользователь не авторизован" });
          }

          //Delete
          // Удаляем пост
          post.remove().then(() => res.json({ success: true }));
        });
      })
      .catch(err => res.status(404).json({ postnotfound: "Пост не найден" }));
  }
);

// @route  POST api/posts/like/:id
// @desc   Like post / Добавление лайка
// @access Private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "Пользователь уже оценил этот пост" });
          }

          //Add user ID to likes arr
          //Добавляем ID пользователя в массив с теми, кто уже поставил лайк
          post.likes.unshift({ user: req.user.id });

          post.save().then(post => res.json(post));
        });
      })
      .catch(err => res.status(404).json({ postnotfound: "Пост не найден" }));
  }
);

// @route  POST api/posts/unlike/:id
// @desc   Unlike post / Удаление лайка
// @access Private
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ nonliked: "Вы еще не оценили этот пост" });
          }

          //Get remove index
          //Получаем индекс который хотим удалить
          const removeIndex = post.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          //Splice out from arr
          //Удаляем из массива пользоваетеля, который оценил пост
          post.likes.splice(removeIndex, 1);

          post.save().then(post => res.json(post));
        });
      })
      .catch(err => res.status(404).json({ postnotfound: "Пост не найден" }));
  }
);

// @route  POST api/posts/comment/:id
// @desc   Add comment to post / Добавление комментария к посту
// @access Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check validation
    // Проверяем пост
    if (!isValid) {
      //If any errors, send 400 with error object
      // Если есть ошибки отсылаем статус 400 и объект с ошибками
      return res.status(400).json(errors);
    }

    Post.findById(req.params.id)
      .then(post => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        };

        //Add to comments array
        //Добавляем в массив с комментариями
        post.comments.unshift(newComment);

        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({ postnotfound: "Пост не найден" }));
  }
);

// @route  DELETE api/posts/comment/:id/:comment_id
// @desc   Remove comment from post / Удаление комментария к посту
// @access Private
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        //Check to see if comment exist
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexists: "Коментария не существует" });
        }

        //Remove index
        //Находим индекс
        const removeIndex = post.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        //Splice comment out of array
        //Удаляем из массива
        post.comments.splice(removeIndex, 1);
        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({ postnotfound: "Пост не найден" }));
  }
);

module.exports = router;
