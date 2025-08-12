const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const userController = require("../controllers/users.js");

//render Signup form and signup functionality
router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signUp));


//render login form and functionality
router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(
    saveRedirectUrl,
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true,
    }),
    userController.login
);

router.get("/logout", userController.logout);

module.exports = router;