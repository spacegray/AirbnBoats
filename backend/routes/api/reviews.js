const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const { Review, User } = require("../../db/models");

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
    const reviews = await Review.findAll({
      include: { model: User },
    });

    return res.json(reviews);
  })
);

// create a review

router.post(
  "/",
  asyncHandler(async function (req, res) {
    const review = await Review.create(req.body);
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
    const errors = {};
    const { review, sessionUser } = req.body;
    console.log(review, sessionUser);
    if (!review.trim().length) {
      errors["length"] = "Must leave a longer review";
    }
    if (Object.keys(errors).length) {
      return res.json(errors);
    }
    let user = await User.findByPk(sessionUser.id);
    user = user.dataValues;
    const { id } = req.params;
    const indivReview = await Review.findOne({
      where: { boatId: id },
      include: User,
    });

    const editedRev = await indivReview.update(req.body);

    return res.json(editedRev.dataValues);
  })
);

router.delete(
  "/:id",
  asyncHandler(async function (req, res) {
    const deleteReview = await Review.destroy({
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
    const reviews = await Review.findAll({
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
