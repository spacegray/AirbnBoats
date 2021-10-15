import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getOneBoat } from "../../store/listings";
import { getReviews, addReview, updatedReview, deleteReview, reviewForm } from "../../store/reviews";
import ReactModal from "react-modal";
import EditReviewModal from "../EditReviewModal";

import "./BoatListingPage.css";

function BoatListingPage() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const boat = useSelector((state) => state.boats[id]);
  const reviews = useSelector((state) => state.reviews);
  const [review, setReview] = useState('');

  // return modified value from eachReview.createdAt, everything before 'T'
  // const date = (reviews) => {
  //     if (reviews.createdAt) {
  //       const longDate = review.createdAt;
  //       simpleDate = longDate.substring(0, longDate.indexOf('T'));
  //     }
  //   return simpleDate;
  // }

 
//  const date = (reviews) => {
//    const values = Object.values(reviews)
//    const longDate = values.reviews.createdAt;
     
//   return longDate.substring(0, longDate.indexOf("T"));
//   };
//   console.log('THIS IS A TEST11', longDate);


 
 
 
 




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
      <div className="page__container">
        <div className="boatList__section">
          <div className="boat__image__section">
            <div className="boat__image">
              <img className="image" src={boat?.img} alt=""></img>
            </div>
          </div>
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

            <div className="review__table">
              <h1>Reviews</h1>
              <div className="reviewsList">
                
                  {sessionUser? <div className="form__section"> <form className="review__form" onSubmit={handleSubmit}>
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
                  </form>  </div> : null }
                  
               
                {reviews ? (
                  Object.keys(reviews).length === 0 ? (
                    <h3>No reviews to display</h3>
                  ) : (
                    Object.values(reviews).map((eachReview) =>
                      boat?.id === eachReview.boatId ? (
                        <div
                          key={eachReview.boatId}
                          className="review__section"
                        >
                          <h3 id="reviewer-name">
                            {eachReview?.User?.username}
                          </h3>
                          <p id="review-content">{eachReview.review}</p>
                          <p id="timestamp">{(eachReview.createdAt)}</p>
                          {sessionUser &&
                            sessionUser?.id === eachReview?.userId && (
                              <>
                              <button
                                id="delete-review"
                                onClick={() => deleteReviewAlert(eachReview.id)}
                              >
                                <i className="trash__btn"> Delete</i>
                              </button>
                              <EditReviewModal />
                              </>
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
      </div>
    </>
  );
}

export default BoatListingPage;
