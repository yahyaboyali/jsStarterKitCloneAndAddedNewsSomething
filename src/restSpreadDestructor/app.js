//console.log("Merhaba Kodlama.io")
let std = {id:1,name:"yahya"}
//console.log(std);

function logtoconsole(std,puan=10) {
    console.log(std.name +" puanı "+ puan)
}
//logtoconsole(std,100);
/*
function logtoconsole2(puan=10,std){
    console.log(std.name+" puanı "+puan)
}

logtoconsole2(undefined,std);
// dersen ancak ilk paramatreyi atlatırsın 
// yoksa verdiğin her şeyi puana atar tip bağlı değil çünkü
*/

let students =["abi","halit","yahya","denem"]

//console.log(students)

//... nedir rest konusundayız
let showProducts=function (id,...products) {
    console.log(id)
    console.log(products)
    // içeriğe ulaşmak istersen 
    console.log(products[0])
    //array içinde array olduğundan bu şekilde erişebilirsins
    // gene bir array çıkar çünkü array içinde array var 1. eleman bir array
    console.log(products[0][0])
    //bununla ilk elemana erişebilirsin artık
}

//console.log(typeof showProducts)
// ...products bir arraydir onu öyle algılar
// aşağıdaki gibi parçalı verebilirsin her şeyi 
//array yapar
//showProducts(10,"elma","armut","karpuz")
// böyle kullanımda array içinde array göndermiş olursun
//showProducts(10,students)


//SPREAD
// array veremiyoruz bir dizi istiyor 
// virgüllerler göndermen lazım
// array verirsen not a number verir nan kızar 
let points = [1,2,4,5,2,6,20,40]// array vermek istiyoruz
// ayrıştıracağız 
console.log(...points);// bak böyle ayırdık 
console.log(Math.max(...points))
// parametre gibi arrayi ayırmaya yarıyor spread


// örnek yan yana gelecke

console.log(..."ABC","D",..."EFG","H")
// TÜM HARFLERİ AYRIŞTIRDIK
