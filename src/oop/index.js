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
//console.log(Customer.bisey)

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
let products = [
    {id:1,name:"acer laptop",unitPrice:15000},
    {id:2,name:"asus laptop",unitPrice:20000},
    {id:3,name:"lenovo laptop",unitPrice:17000},
    {id:4,name:"dell laptop",unitPrice:12000}
]

console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")

// var deneme;
// function getData(){
    
//      fetch("http://localhost:8080/api/books/getAll")
//      .then(response=>response.json()).then(
//          data=>{
//              console.log(data)
//               deneme = data
//              console.log(deneme)
//              })
             
// }
// getData()


// referans bu yeni arraylerle değişiyor 
/*
filter yeni bir array döndürür ve referans değişmiş olur

*/
let filterProducts= products.filter(product=>product.unitPrice>12000)

console.log(filterProducts)


// accumulator görevi görüyor reduce
// her product için acc ye ekleme yapar başlangıç değeri de 0 olarak sonradan veriyorsun

let carttotal = products.reduce((acc,product)=> acc+product.unitPrice,0)

console.log(carttotal)


/*
filtreleme yapıyor ardından kdv değerini güncel fiyatlarına ekliyor 
ardından reduce kullanıp toplam değeri hesaplıyor 
yeni price lara göre 
*/
let cartTotal2 = products.filter(p=>p.unitPrice>1000).map(
    p=>{
        p.unitPrice=p.unitPrice*1.18
        return p;
    }
).reduce((acc,p)=>acc+p.unitPrice,0)

console.log(cartTotal2)