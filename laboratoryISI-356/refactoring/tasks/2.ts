/*class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Cart {
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    calculateTotal(): number {
        let total = this.products.reduce((acc, product) => acc + product.price, 0);

        // Descuento: 10% si hay más de 5 productos
        if (this.products.length > 5) {
            total *= 0.9;
        }

        // Envío: $10 si la compra es menor a $50
        if (total < 50) {
            total += 10;
        }

        return total;
    }
}


*/


class Product {
    constructor(public id: number, public name: string, public price: number) {}
}

class Cart {
    private products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    calculateTotal(): number {
        const total = this.calculateSubtotal();

        const discount = this.calculateDiscount(total);
        const shippingCost = this.calculateShippingCost(total);

        return total - discount + shippingCost;
    }

    private calculateSubtotal(): number {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }

    private calculateDiscount(subtotal: number): number {
        if (this.products.length > 5) {
            return subtotal * 0.1; // Descuento del 10% si hay más de 5 productos
        }
        return 0;
    }

    private calculateShippingCost(subtotal: number): number {
        if (subtotal < 50) {
            return 10; // Envío: $10 si la compra es menor a $50
        }
        return 0;
    }
}



