import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/reviews";
import { useParams } from "react-router-dom";

export default function EditReviewForm () {
  // console.log(eachReview);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => (state.session.user))
  const boats = useSelector(state => state.boats.boat)
  const eachReview = useSelector(state => state.reviews)
  const { id } = useParams();
  //  const [id, setId] = useState("");
  //  const [userId, setUserId] = useState("");
  //  const [id, setBoatId] = useState("");
   const [reviewBody, setReviewBody] = useState('');

   const editHandler = (e) => {
       e.preventDefault();
       const newReview = {
           id: +id,
           boatId: id, 
           review: reviewBody,
       }
       return dispatch(updateReview(newReview)).then((e) => {
         console.log(e)
       })
   }
   const allReviews = [];
   for (let key in eachReview) {
     allReviews.push(eachReview[key])
   }
   console.log("allreviews test", allReviews)
   console.log("eachReview test", eachReview)
   console.log("review body test",reviewBody)
   console.log("new review test". newReview)

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
