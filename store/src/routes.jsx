import {ProductList, ProductDetails, MyCart} from "./components/products";

export const routes = () => [
    { path: '/', element: <ProductList /> },
    { path: '/products/:productId', element: <ProductDetails /> },
    { path: '/cart', element: <MyCart /> }
];