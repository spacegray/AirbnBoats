import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/reviews";
import { useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";

export default function EditReviewForm({ data }) {
  const [showModal, setShowModal] = useState(true);
  const { review_Id } = data;
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const boats = useSelector((state) => state.boats.boat);
  const { id } = useParams();
  const [reviewId, setReviewId] = useState("");

  const [reviewBody, setReviewBody] = useState("");

  const editHandler = (e) => {
    e.preventDefault();
    const newReview = {
      id: review_Id,
      boatId: id,
      review: reviewBody,
    };
    return dispatch(updateReview(newReview)).then((e) => {
      console.log(e);
    });
  };

  return (
    <>
      <div className="editReview_form_container">
        <h2>Edit Your Review</h2>
        <form className="updateReviewForm" onSubmit={editHandler}>
          <div>
            <textarea
              name="review"
              value={reviewBody}
              onChange={(e) => setReviewBody(e.target.value)}
            />
          </div>
          <div className="edit__Review__btn">
            <button
              type="submit"
              className="editReview-form-btn"
              onclick={() => {
                setReviewId(); 
              }}
              //  onChange={(e) => setReview(e.target.value)}
            >
              Update Review
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
