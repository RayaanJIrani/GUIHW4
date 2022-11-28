import {useContext} from "react";
import {CartContext} from "../../context/CartContext";

export const MyCart = () => {
    const {cart, addToCart} = useContext(CartContext);

    return <>
    <div className="container-lg">
        <table className="table table-striped mt-3">
            <thead className="border-top">
                <th className="pt-2 pb-2 col-1"> Qty</th>
                <th className="pt-2  pb-2 col-10">Product</th>
                <th className="pt-2 pb-2 col-1">Total</th>
            </thead>
            <tbody>
            {
                cart.items.map(product => <tr>
                    <td className="pt-2 pb-2 col-1 text-dark">{product.quantity}</td>
                    <td className="pt-2 pb-2 col-10 text-dark">
                        <span>{product.product.name + " - "}</span>
                        <span className="text-muted">${product.product.price}/each</span>
                    </td>
                    <td className="pt-2 pb-2 col-1 text-dark">{product.totalPrice}</td>
                </tr>)
            }
            </tbody>
        </table>
    </div>
    <div className="container-lg">
        <p className="d-flex justify-content-end fw-bold">$ {cart.total}</p>
    </div>
        <button onClick={() => addToCart({id: 1, name: "Hail", price: 18.54})}>Add to cart</button>
    </>;
};
