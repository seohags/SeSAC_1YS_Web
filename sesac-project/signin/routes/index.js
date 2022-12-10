const express = require("express");
const user = require("../controller/Cuser");
const router = express.Router();

router.get("/" , user.index);

router.get("/signup", user.signup);
router.post("/signup", user.post_signup);

router.get("/signin", user.signin);
router.get("/signin", user.post_signin);

module.exports = router;