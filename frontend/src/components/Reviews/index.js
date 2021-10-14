import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getReviews, deleteReview } from "../../store/review";
import './Reviews.css'

function Reviews() {
    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams();
    const dispatch = useDispatch();

    const reviews = useSelector((state) => ((Object.values(state.reviews))));

    const currBoatReviews = reviews.filter(review => review.spotId === +id);

    const filteredReviews = currBoatReviews.sort(function (a, b) {
        return b.id - a.id;
    })

    const remove = (id) => {
        dispatch(deleteReview(id))
        window.alert('Review has been deleted')
    }

    useEffect(() => {
        dispatch(getReviews(id))
    }, [dispatch, id])

    if (!listingReviews) {
        return null;
    }

    return (
        <>
        <div className='reviews__Section'>
            {filteredReviews.map((review) => {
                return (
                    <div key={review?.id} className='review__section'>
                        <h3>{review?.User?.username}</h3>
                        <p>{review?.review}</p>
                        </div>

                )
            })}

        </div>
        </>
    )
}