// değerleri atamak için prototip oluşturuyoruz 
class Customer {
    constructor(id,customerNumber){

    }
}



let customer = new Customer(1,"1234");

// prototyping sonradan bir class a özellik ekleyebiliyorsun
customer.name = "deneme"// js de bu mümkün 
console.log(customer.name)

// direk Classın kendisine prototyping 
Customer.bisey="bisey"
console.log(Customer.bisey)