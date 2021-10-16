import { useState } from "react";
import ReactModal from "react-modal";
import EditReviewForm from "../EditReviewForm";
import { Modal } from "../../context/Modal";

import "./EditReviewModal.css";

// const dispatch = useDispatch();

console.log("THIS IS A TEST", EditReviewForm);

export default function EditReviewModal( eachReview ) {
  console.log("MEGA TESTING", eachReview);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        className="btn-modal"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        {" "}
        Edit{" "}
      </button>
      <ReactModal
        isOpen={openModal}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
        onRequestClose={() => {
          setOpenModal(false);
        }}
      >
        {" "}
        <h1>Edit your comment</h1>
        <EditReviewForm review={eachReview.review} />
      </ReactModal>
    </>
  );
}
