const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const Authorization = require("../middlewares/authorization");
const Authentication = require("../middlewares/authentication");

// define the home page route
router.post("/login", Controller.login);
router.post("/register", Controller.register);
router.get("/comics", Controller.getComic);
router.get("/comics/:id", Controller.getOne);
router.put("/comics/:id", Controller.updateOne);

module.exports = router;
