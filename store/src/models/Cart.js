 export class Cart {
    constructor() {
            this.items = [];
        }

        addItem(product, quantity) {
            const existing = this.items.find(item => item.product.id === product.id);
            if (existing) {
                existing.quantity += quantity;
            } else {
                this.items.push({ product, quantity });
            }
        }

        updateQuantity(product, quantity) {
            const existing = this.items.find(item => item.product.id === product.id);
            if (existing) {
                existing.quantity = quantity;
            }
        }

        removeItem(product) {
            const existing = this.items.find(item => item.product.id === product.id);
            if (existing) {
                this.items = this.items.filter(item => item !== existing);
            }
        }

        get itemCount() {
            return this.items.reduce((total, item) => total + item.quantity, 0);
        }

        get totalPrice() {
            return this.items.reduce((total, item) => total + item.quantity * item.product.price, 0);
        }
 }