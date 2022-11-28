import {useContext} from "react";
import {CartContext} from "../../context/CartContext";

export const MyCart = () => {
    const {cart, addToCart} = useContext(CartContext);

    return <>
    <button onClick={() => addToCart({id: 1, name: 'Product 1'})}>Add to cart</button>
    <div className="container-lg">
        <table className="table table-striped table-bordered mt-3">
            <thead>
                <th className="pt-2 pb-2">Qty</th>
                <th className="pt-2 pb-2">Product</th>
                <th className="pt-2 pb-2">Total</th>
            </thead>
            <tbody>
                <tr><td>{cart.total}</td></tr>
            </tbody>
        </table>
    </div>
    </>;
};
