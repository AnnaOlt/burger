const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function (req, res) {
  burger.all(function (data) {
    let hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
