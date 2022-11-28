import {useContext} from "react";
import {CartContext} from "../../context/CartContext";

export const MyCart = () => {
    const {cart, addToCart} = useContext(CartContext);

    return <>
    <button onClick={() => addToCart({id: 1, name: "Hail", price: 18.54})}>Add to cart</button>
    <div className="container-lg">
        <table className="table table-striped mt-3">
            <thead>
                <th className="pt-2 pb-2 col-1"> Qty</th>
                <th className="pt-2 pb-2 col-10">Product</th>
                <th className="pt-2 pb-2 col-1">Total</th>
            </thead>
            <tbody>
            {
                cart.items.map(product => <tr>
                    <td className="pt-2 pb-2 col-1 text-dark">{product.quantity}</td>
                    <td className="pt-2 pb-2 col-10 text-dark">{product.product.name + " - " + product.product.price}</td>
                    <td className="pt-2 pb-2 col-1 text-dark">{product.totalPrice}</td>
                </tr>)
            }
            </tbody>
        </table>
    </div>
    <div className="container-lg">
        <p className="d-flex justify-content-end font-weight-bold">$ {cart.total}</p>
    </div>
    </>;
};
