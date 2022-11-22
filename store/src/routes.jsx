import {ProductList, ProductDetails, MyCart} from "./components/products";

export const Routes = () => [
    { path: '/', element: <Navigate to={"/ProductList"} /> },
    { path: '/products/:productId', element: <ProductDetails /> },
    { path: '/cart', element: <MyCart /> }
];