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
