import {SelectField, TextArea} from "../common";
import {TextField} from "../common";
import {Rating} from "../common";
import {useState} from "react";

export const ReviewForm = ({ onReviewAdded }) => {
        const [userName, setUserName] = useState('');
        const [rating, setRating] = useState(0);
        const [comment, setComment] = useState('');
        const [ratingOptions] = useState([1, 2, 3, 4, 5].map(x => ({ value: x, label: x })));

        const handleReviewFormSubmit = () => {
            //Get's the date
            const dateObj = new Date();
            //Get's the abbreviated month name
            const month = dateObj.toLocaleString('default', { month: 'short' });
            //Get's the day of the month
            const day = dateObj.getDate();
            //Get's the year
            const year = dateObj.getFullYear();
            const date = `${month} ${day}, ${year}`;
            console.log(date);
            //Adds that to the list of Reviews
            onReviewAdded({userName, rating, comment, date});

            //Clears the form
            setUserName('');
            setRating(0);
            setComment('');
        }

        return (
            <div className="card border-muted mb-3 container-fluid">
                <div className="row">
                    <div className="card-header text-white bg-secondary">
                        <h4>Add a Review</h4>
                    </div>
                    <div className="col-md-7 mt-3">
                        <TextField label={"Your Name"}
                                 value={userName}
                                 setValue={setUserName}/>
                    </div>
                    <div className="col-md-2 mt-3">
                        <SelectField options={ratingOptions}
                                     label={"Rating"}
                                     value={rating}
                                     optionValueKey={"value"}
                                     optionLabelKey={"label"}
                                     setValue={setRating}/>
                    </div>
                    <div className="col-md-3 mt-5">
                        <Rating value={rating}/>

                    </div>
                    <TextArea label={"Comment"}
                                 value={comment}
                                 setValue={setComment}/>
                    <p>
                        <button type="button" className="btn btn-primary btn-block "
                                onClick={handleReviewFormSubmit}>
                            Submit
                        </button>
                    </p>
                </div>
            </div>
        )
}