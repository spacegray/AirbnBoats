import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { getOneBoat } from "../../store/listings";
import { getReviews, addReview, updatedReview, deleteReview, reviewForm } from "../../store/reviews";


import "./BoatListingPage.css";

function BoatListingPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const boat = useSelector((state) => state.boats[id]);
  const reviews = useSelector((state) => state.reviews.totalReviews);
  const [review, setReview] = useState('');


  useEffect(() => {
    dispatch(getOneBoat(id));
    dispatch(getReviews(id));
    // dispatch(deleteReview(id));
    // dispatch(addReview(id))
  }, [id, dispatch]);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const createReview = {
        review,
        userId: sessionUser.id,
        boatId: +boat.id
    };
    await dispatch(reviewForm(createReview))
    setReview('');
};

    const deleteReviewAlert = (id) => {
      dispatch(deleteReview(id));
      window.alert("Your Review Has Been Deleted");
    };

  return (
    <>
      <div className="boatList__section">
        <div className="nav__panel"></div>
        <div className="decription__container">
          <div className="boat__details">
            <h2>{boat?.name}</h2>
            <div className="boat__address">
              {boat?.address},{boat?.city}, {boat?.state} {boat?.country}{" "}
              {boat?.zipCode}
            </div>
            <div className="price__section">
              <div className="listing__price">$ {boat?.price} /day </div>
            </div>
          </div>
          <div className="boat__image__section">
            <div className="boat__image">
              <img className="image" src={boat?.img} alt=""></img>
            </div>
          </div>
          <div className="review__table">
            <h1>Reviews</h1>
            <div className="reviewsList">
              <div className="form__section">
                <form className="review__form" onSubmit={handleSubmit}>
                  <textarea
                    className="review-area"
                    type="text"
                    placeholder="How was your experience?"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                    <button className="submit__btn" type="submit">
                      Submit
                    </button>
                </form>
              </div>
              {reviews ? (
                Object.keys(reviews).length === 0 ? (
                  <h3>No reviews to display</h3>
                ) : (
                  Object.keys(reviews).map((key) =>
                    boat?.id === reviews[key].boatId ? (
                      <div key={reviews[key]} className="review__section">
                        <h3 id="reviewer-name">
                          {reviews[key]?.User?.username}
                        </h3>
                        <p id="review-content">{reviews[key].review}</p>
                        <p id="timestamp">{reviews[key].createdAt}</p>
                        {sessionUser &&
                          sessionUser?.username ===
                            reviews[key]?.User?.username && (
                            <button
                              id="delete-review"
                              onClick={() => deleteReviewAlert(reviews[key].id)}
                            >
                              <i className="trash__btn"> Delete</i>
                            </button>
                          )}
                      </div>
                    ) : null
                  )
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoatListingPage;
