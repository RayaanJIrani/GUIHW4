 export class Cart {
    constructor() {
        this.items = [];
        this.total = 0;
    }
    addProduct(product) {
        const cartItem = this.items.find(item => item.id === product.id);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            this.items.push(new CartItem(product.id, product.name, product.price, 1));
        }
        this.total += product.price;
    }
 }