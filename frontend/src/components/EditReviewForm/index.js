import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatedReview } from "../../store/reviews";


export default function EditReviewForm (reviewContent) {
  console.log(reviewContent);
   const dispatch = useDispatch();
  //  const [id, setId] = useState("");
  //  const [userId, setUserId] = useState("");
  //  const [id, setBoatId] = useState("");
   const [review, setReview] = useState("");

   const editHandler = (e) => {
       e.preventDefault();
       const editedReview = {
           id: reviewContent.id,
           userId: reviewContent.userId,
           boatId: reviewContent.boatId, 
          reviewContent
       }
      console.log('Extra Friday Test', editedReview);
      //  return dispatch(updatedReview(editedReview))
   }

   return (
     <>
       <div className="editReview_form_container">
         <h2>Edit Your Review</h2>
         <form className="updateReviewForm" onSubmit={editHandler}>
           <div>
             <textarea
               name="review"
               value={review}
               onChange={(e) => setReview(e.target.value)}
             />
           </div>
           <div className="edit__Review__btn">
             <button
               type="submit"
               className="editReview-form-btn"
             >
               Update Review
             </button>
           </div>
         </form>
       </div>
     </>
   );
}
