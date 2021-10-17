const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

// const {Review} = require('.../../db/models')

const router = express.Router();

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const reviews = await Review.findAll();
//     return res.json({ reviews });
//   })
// );

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const reviews = await db.Review.findAll({
      include: { model: User },
    });

    return res.json(reviews);
  })
);

// create a review

router.post(
  "/",
  asyncHandler(async function (req, res) {
    const review = await db.Review.create(req.body);
    // const userReview = await db.Review.findOne({
    //   where: {
    //     id: review.id,
    //   },
    //   include: { model: db.Boat },
    // });
    return res.json(review);
  })
);

// update review
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const indivReview = await db.Review.findByPk(id);
    console.log("BACKEND TEST!!!!!!!!", indivReview);
    const editedRev = await indivReview.update(req.body);
    console.log("BACKEND TEST 2!!", {editedRev});
    // return res.json(editedRev);
  })
);

router.delete(
  "/:id",
  asyncHandler(async function (req, res) {
    const deleteReview = await db.Review.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(req.params.id);
  })
);

// find by boatId
router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const reviews = await db.Review.findAll({
      where: {
        boatId: req.params.id,
      },
      include: { model: db.User },
      order: [["updatedAt", "DESC"]],
    });
    return res.json(reviews);
  })
);

module.exports = router;
