import {CartContext} from "../../context/CartContext";
import {useContext, useState, useEffect} from "react";
import {getProducts} from "../../api/productsAPI";
import {Link} from "react-router-dom";

const ProductDetailsButton = ({product}) => {
    const {id} = product;
    return (
        <Link to={`/products/${id}`} className="btn btn-info text-white">Product Details</Link>
    );
}

const AddToCartButton = ({product}) => {
    const {addToCart} = useContext(CartContext);
    return (
        <button className="btn btn-warning my-2" onClick={() => addToCart(product)}>
            <Link to="/cart" className="text-decoration-none text-black">Add to Cart</Link>
        </button>
    );
}

const PriceButton = ({price}) => {
    return (
        <span className="badge bg-success text-white rounded-pill">$ {price}</span>
    );
}

const RenderImage = ({product}) => {
    let productBadCode = product;
    let imgUrl = productBadCode.imageUrl;
    return (
        <img src={imgUrl} alt="Product Image" className="img-fluid"/>
    );
}

const ProductCard = ({product}) => {
    const {id, name, price} = product;
    return (
        <div className="card col p-2 mx-3 mt-3">
            <div className="card-body">
                <div className={"position-relative"}>
                    <RenderImage product={product}/>
                    <PriceButton price={price}/>
                </div>
                <h5 className="card-title text-center">{name}</h5>
            </div>
            <ProductDetailsButton product={product}/>
            <AddToCartButton product={product}/>
        </div>
    );
}

export const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(x => setProducts(x));
    }, []);


    return <>
        <header className={"navbar container-lg bg-light text-secondary p-3 align-middle"}>
            Tasty Snacks
        </header>
        <div className="container-lg">
            <div className="row">
                {
                    products.map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    </>
}