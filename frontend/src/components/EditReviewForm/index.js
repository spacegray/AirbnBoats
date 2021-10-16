import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateReview } from "../../store/reviews";
import { useParams } from "react-router-dom";

export default function EditReviewForm ({eachReview}) {
  console.log(eachReview);
   const dispatch = useDispatch();
  const sessionUser = useSelector(state => (state.session.user))
  const { id } = useParams();
  //  const [id, setId] = useState("");
  //  const [userId, setUserId] = useState("");
  //  const [id, setBoatId] = useState("");
   const [reviewBody, setReviewBody] = useState("");

   const editHandler = (e) => {
       e.preventDefault();
       const eachReview = {
           id: reviewContent.id,
           userId: reviewContent.userId,
           boatId: reviewContent.boatId, 
          review
       }
       return dispatch(updateReview(eachReview))

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
