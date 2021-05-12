import React, { useState } from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { useLocation, useParams, useHistory } from "react-router-dom";

const AddReview = () => {
    const { id } = useParams();
    const location = useLocation();
    const history = useHistory();

    const [name, setName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("Rating");

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        try {
        const response = await RestaurantFinder.post(`/${id}/addReview`, {
            name,
            review: reviewText,
            rating,
        });
        history.push("/");
        history.push(location.pathname);
        } catch (err) {}
    };
  return (
        <div className="mb-2">
            <form action="">
                <div className="row">
                    <div className="col mb-4">
                        <label htmlFor="name">Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            placeholder="name"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="rating">Rating</label>
                        <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            id="rating"
                            className="custom-select form-control"
                        >
                            <option disabled>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group mb-4">
                <label htmlFor="Review">Review</label>
                <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    id="Review"
                    className="form-control"
                ></textarea>
                </div>
                <button
                    type="submit"
                    onClick={handleSubmitReview}
                    className="btn btn-primary"
                >
                Submit
                </button>
            </form>
        </div>
  );
};

export default AddReview;