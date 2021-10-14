const express = require("express");
const asyncHandler = require("express-async-handler");
const { Booking, User, Boat } = require("../../db/models");

const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    const allBookings = await Booking.findAll({

    })
    return res.json(allBookings);
    
}))

router.get('/:id', asyncHandler(async function (req, res) {
    const userBookingList = await Booking.findAll({ 
        where: { 
            userId: req.params.id
        },
        include: [Boat, User],
        order: [['updatedAt', 'DESC'],]
    })
    return res.json(userBookingList);
}))

// router.post('/', asyncHandler(async function (req, res) {
//     const book = await Booking.create(req.body);
//     const newBooking = await Booking.findOne({
//         where: { 
//             id: booking.id
//         },
//         include: [User.id, Boat.id]
//     });
//     return res.json(newBooking);
// }))

// router.delete('/:id', asyncHandler(async function (req, res) {
//     const thisBooking = req.params.id;
//     await Booking.destroy({
//         where: { 
//             id: thisBooking
//         }
//     });
//     return res.json(thisBooking);
// }))

module.exports = router;