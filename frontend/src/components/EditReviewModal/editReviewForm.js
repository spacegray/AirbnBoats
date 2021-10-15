import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatedReview } from "../../store/reviews";
import "./EditReviewModal.css";


export default function editReviewForm ({selectedReview, setOpenModal}) {
   const dispatch = useDispatch();
   const [review, setReview] = useState(selectedReview.review);

   const editHandler = (e) => {
       e.preventDefault();
       const editedReview = {
           id: selectedReview.id,
           userId: selectedReview.userId,
           boatId: selectedReview.boatId, review 
       }
       dispatch(updatedReview(editedReview))
       setOpenModal(false);
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
             <button type="submit" className="editReview-form-btn">
               Update Review
             </button>
           </div>
         </form>
       </div>
     </>
   );
}