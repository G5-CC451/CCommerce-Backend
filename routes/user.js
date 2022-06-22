const express = require("express");

const router = express.Router();

router.get("/user", (req, res) => {
  res.json({
    data: "Hola mundo desde 'user API endpoint'",
  });
});

module.exports = router;