// değerleri atamak için prototip oluşturuyoruz 
class Customer {
    constructor(id,customerNumber){
        // buraya direk aslında prototyping yapıyoruz 
        // özellik eklemiş oluyoruz bu sayede aşağıda 
        // id ve customerNumber ı okuyabiliyoruz
        // saf js de class yok fonksiyon var
        this.id=id
        this.customerNumber=customerNumber
    }
}



let customer = new Customer(1,"1234");

// prototyping sonradan bir class a özellik ekleyebiliyorsun
customer.name = "deneme"// js de bu mümkün 
console.log(customer.name)

// direk Classın kendisine prototyping 
Customer.bisey="bisey"
console.log(Customer.bisey)

// mantığın babası geliyor burası çok önemli sürekli bakmalısın

// superi kullanıp yukarının constructoru çalıştırıldı
class BireyselCustomer extends Customer{
    constructor(firstname,id,customerNumber){
        super(id,customerNumber)// ana classın constructoruna gönderdik
        this.firstname=firstname// prototyping yapıldı
    }

}

class KurumsalCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}