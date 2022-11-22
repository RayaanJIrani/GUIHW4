import axios from "axios";

const apiEndPoint = "https://api.johnlawrimore.com/store/products";
const apiConfig = {
    headers: {
        Authorization: 'rirani'
    }
};

//API routes for products
export const getProductById = (id) => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/${id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});