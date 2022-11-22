//Model for products
export class Product {
    constructor(id, name, description, price, imageURL, reviews) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;
        this.reviews = reviews;
    }
}