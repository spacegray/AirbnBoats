const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");


const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const boatListings = await db.Boat.findAll({

    });
    return res.json(boatListings);
  })
);

router.get("/:id", asyncHandler(async function (req, res) {
  const singleListing = await db.Boat.findByPk(
    req.params.id
  )
  return res.json(singleListing);
}))

module.exports = router;