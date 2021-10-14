const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

// const {Review} = require('.../../db/models')

const router = express.Router();

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const reviews = await Review.findAll();
//     return res.json({ reviews });
//   })
// );

router.get("/", asyncHandler(async function (req, res) {
    const reviews = await db.Review.findAll({

    })
    return res.json(reviews)
}))
console.log(reviews);


// create a review
// router.post(
//   "/",
//   asyncHandler(async function (req, res) {
//     const review = await db.Review.create(req.body);
//     const userReview = await db.Review.findOne({
//       where: {
//         id: review.id,
//       },
//       include: { model: db.Boat },
//     });
//     return res.json(userReview);
//   })
// );


//previous attempt. Says resource not found
// router.post('/', asyncHandler(async function (req, res) {
//     const review = await db.Review.create(req.body);
//     const userReview = await db.Review.findOne({
//         where: {
//             id: review.id,      
//         },
//         include: {model: db.Boat}
//     });
//     return res.json(userReview);
// }));

// // update review
// router.put('/:id', asyncHandler(async (req, res) => {
//     const { id } = req.params;

//     await db.Review.update(req.body, {
//         where: { id }
//     })
//     const updatedReview = await db.Review.findOne({
//         where: { id } 
//     })
//     return res.json({ updatedReview })

// }))

// router.delete('/:id', asyncHandler(async function (req, res) {
//     const deleteReview = await db.Review.destroy({
//         where: {
//             id: req.params.id
//         }
//     });
//     return res.json(req.params.id)
// }))

// // find by boatId
// router.get('/:id', asyncHandler(async function (req, res) {
//     const reviews = await db.Review.findaAll({
//         where: {
//             boatId: req.params.id
//         },
//         include: { model: db.User },
//         order: [['updatedAt', 'DESC']]
//     });
//     return res.json(reviews)
// }))

module.exports = router;