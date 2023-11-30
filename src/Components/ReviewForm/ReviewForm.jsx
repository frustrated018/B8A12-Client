import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useToastify from "../../Hooks/useToastify";

const ReviewForm = ({ productId, userName, userEmail, userImage }) => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");
  const [form, setForm] = useState(null); 
  const axiosPublic = useAxiosPublic();
  const { successToast, errorToast } = useToastify();

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newReview = {
      productId,
      userName,
      userEmail,
      userImage,
      rating,
      review,
    };

    // MAJROR ISSUE: When same user Tries to post a diffenet review to a different product it still blocks them

    try {
      // Send a post request to "reviews/addreview" with newReview in the body
      const response = await axiosPublic.post("/reviews/addreview", {
        newReview,
      });
      if (response.data.reviewCount > 0) {
        successToast("Your Review has been Posted!!");
        // Reset the form using the form reference
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      errorToast("Couldn't Post your Review!");
    }
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit} ref={(el) => setForm(el)}>
      {/* Rating field */}
      <label htmlFor="rating" className="block mb-2">
        Rating:
      </label>
      <select
        id="rating"
        name="rating"
        value={rating}
        onChange={handleRatingChange}
        className="w-full p-2 border rounded-md"
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>

      {/* Review text field */}
      <label htmlFor="review" className="block mb-2 mt-3">
        Review:
      </label>
      <textarea
        id="review"
        name="review"
        value={review}
        onChange={handleReviewChange}
        placeholder="Write your review..."
        rows={4}
        className="w-full p-2 border rounded-md"
      />

      {/* Submit button */}
      <button
        type="submit"
        className="mt-3 p-2 bg-blue-400 text-white rounded-md cursor-pointer"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
