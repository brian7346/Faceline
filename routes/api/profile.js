const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
// Добавляем модель профиля
const Profile = require("../../models/Profile");

// Load User Model
// Добавляем модель польхователя
const User = require("../../models/User");

// @route  GET api/prolile/test
// @desc   Tests prolile route/Тестовый запрос для профиля
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// @route  GET api/prolile
// @desc  Get current users prifole / Получает профиль пользователя
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = "У этого пользователя нету профиля";
          return res.status(404).json(errors);
        }

        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route  POST api/prolile
// @desc  Create pr edit user profile / Создает или редактирует профиль пользователя
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.body.handle;
    if (req.body.company) profileFields.company = req.body.body.company;
    if (req.body.website) profileFields.website = req.body.body.website;
    if (req.body.location) profileFields.location = req.body.body.location;
    if (req.body.bio) profileFields.bio = req.body.body.bio;
    if (req.body.status) profileFields.status = req.body.body.status;
    if (req.body.githubusername)
      profileFields.githubusername = req.body.body.githubusername;
    // Skills split into array
    // Разделяем скилы на массив
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }

    //Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.body.twitter;
    if (req.body.instagram)
      profileFields.social.instagram = req.body.body.instagram;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //Update
        Profile.findByIdAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        //Create

        //Check if handle exist
        Profile.findOne({ handle: profileFields }).then(profile => {
          if (profile) {
            errors.handle = "That handle already exist";
            res.status(400).json(errors);
          }

          //Save profile
          new Profile(profile).save().then(profile => res.json(profile));
        });
      }
    });
  }
);
module.exports = router;
