import {Fragment} from "react";
import {Rating} from "../common";

export const ReviewList = ({ reviews }) => {

    reviews = reviews || []; //This resolves the issue when reviews is undefined

    return (
        <div className="mt-5">
            <h3>
                Product Reviews
                <span className="text-muted"> ({reviews.length})</span>
            </h3>
            {reviews.length === 0 &&
                <p className="m-2 p-2 rounded bg-light">Be the First to add a Review!</p>}
            {/*The && causes the <p> not the execute when reviews.length !== 0*/}
            {reviews.map(review => (
                <div className="card bg-light mb-3">
                    <div className="card-header">
                        <Rating value={review.rating}/>
                    </div>
                    <div className="card-body p-3">
                        <p className="card-subtitle mb-2 mt-2 text-muted float-end ">{review.date}</p>
                        <h6 className="card-subtitle mb-2 mt-2 text-muted">{review.userName}</h6>
                        <p className="card-text mt-3">"{review.comment}"</p>
                    </div>
                </div>
            ))}
        </div>
    )
}