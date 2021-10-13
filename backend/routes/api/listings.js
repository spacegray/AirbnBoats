const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const boatListings = await db.Boat.findAll({
      include: [{ model: db.Boat}],
    });
    return res.json(boatListings);
  })
);

module.exports = router;