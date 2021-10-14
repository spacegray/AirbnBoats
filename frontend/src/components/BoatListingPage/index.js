import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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


  //   return state.boats[id];
  // });
  useEffect(() => {
    dispatch(getOneBoat(id));
    dispatch(getReviews(id));
    dispatch(deleteReview(id));
  }, [id, dispatch]);

  // console.log(boat)

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
                          sessionUser?.username === reviews[key]?.User?.username && (
                            <button
                              id="delete-review"
                              onClick={() => deleteReview(reviews[key].id)}
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
