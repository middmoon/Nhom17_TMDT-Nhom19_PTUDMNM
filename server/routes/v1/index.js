const express = require("express");
const router = express.Router();

router
  .use("/access", require("./access.route"))
  .use("/shop", require("./shop.route"))

  .get("/", function (req, res, next) {
    res.render("index", { title: "TMDT CTK45A API V1" });
  });

module.exports = router;
