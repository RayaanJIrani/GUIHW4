//Component that depicts a rating value in the form of stars (1-5)
import './rating.css';

export const Rating = ({ value }) =>
    <>
        <span className="stars">
            {
                [1, 2, 3, 4, 5].map(x => <i key={x} className={x > +value ? 'empty-star' : 'full-star'}></i>)
            }
        </span>
    </>;
