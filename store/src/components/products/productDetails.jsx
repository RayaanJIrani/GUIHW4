import {getProductById} from "../../api/productsAPI";
import {useState, useEffect} from "react";
import {ReviewList} from "./reviewList";
import {ReviewForm} from "./reviewForm";
import {useParams} from "react-router-dom";

//Navigation
const Naviagation = ({name}) =>
   <>
        <div className="navbar container-lg bg-light rounded mb-3 p-lg-2 align-middle">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-primary">Tasty Snacks</a></li>
                <li className="breadcrumb-item active" aria-current="page">{name}</li>
            </ol>
        </div>
    </>;

const ProductInfo = ({name, price, description, imgUrl}) =>
    <div className="d-flex">
        <div className="productDetailsImageContainer">
            <img src={imgUrl} alt="Image of Product"/>
        </div>
        <div className="productDetailsTextContainer">
            <h1 className="display-3 text-dark">{name}</h1>
            <h3>
                <span className="badge bg-primary">${price}</span>
            </h3>
            <p className="text-muted ">{description}</p>
        </div>
    </div>;


export const ProductDetails = () => {
    const [product, setProduct] = useState({});
    let {productId} = useParams();


    //Calls the API
    useEffect(() => {
        getProductById(productId).then(x => setProduct(x)); //hardcoded id
    },[]);


    const onReviewAdded = (review) => {
        setProduct({
            ...product,
            reviews: [...product.reviews, review]
        });
    }

    return (
        <>
            <Naviagation name={product.name}/>
            <div className="container-lg bg-light rounded">
                <div className="productDetailsContainer pt-5 pb-5">
                    <ProductInfo name={product.name} price={product.price} description={product.description} imgUrl={product.imageUrl}/>
                </div>
            </div>
            <div className="container-lg">
                <ReviewList reviews={product.reviews}/>
                <ReviewForm onReviewAdded={onReviewAdded}/>
            </div>

        </>
    )
}