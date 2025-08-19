class ProductProperties {
    // Constructor to initialize product properties
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;     
    }
    // Method to calculate total value of the product
    totalValue() {
        return this.price * this.quantity;
    }
    toString() {
        //Returns a string representation of the product
        return `${this.name} - Price: $${this.price}, Quantity: ${this.quantity}, Total Value: $${this.totalValue()}`;  
    }

    // Static method to calculate discount
    static applyDiscount(product, discount) {
        // Returns the price after applying the discount percentage
        return product.price -= (product.price * (discount / 100));
    }
}


//Creating an instance of ProductProperties
const apple = new ProductProperties('Apple', 2.50, 50);

//Logging the total value of the product
const totalValue = apple.totalValue();
console.log(`Total value of: $${totalValue}`);
//Logging the string representation of the product
const productInfo = apple.toString();
console.log(productInfo);

//Creating a subclass for Perishable products properties
class PerishableProduct extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    
    // Overriding the toString method to include expiration date
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}
//Creating an instance of PerishableProduct
const milk = new PerishableProduct('Milk', 1.50, 10, '2024-12-31');
//Logging the total value of the perishable product 
console.log(`Total value of perishable product: $${milk.totalValue()}`);
//Logging the string representation of the perishable product
console.log(milk.toString());

//Creating second istance of perishable product
const bread = new PerishableProduct('Bread', 3.00, 20, '2024-11-15');
//Logging the total value of the second perishable product
console.log(`Total value of perishable product: $${bread.totalValue()}`);
//Logging the string representation of the second perishable product
console.log(bread.toString());


//Array of Products 
const products = [milk, bread];
products.forEach(product => {
    ProductProperties.applyDiscount(product, 10);
});

//logging the products after applying discount 
console.log("After applying 10% discount:");
products.forEach(product => {
    console.log(product.toString());
});
