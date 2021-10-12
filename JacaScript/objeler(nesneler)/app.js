/* var isim = "Mehmet";
var yas = 28 ;
var gozRengi = "Ela";

document.write(isim+" "+yas+" "+gozRengi); */

var insan1 = {
    name : "Mehmet",
    age : 28 ,
    eyes : "Ela"
};
console.log(insan1.name+" "+insan1.age+" "+insan1.eyes);
console.log(insan1.name.length);

function insan(isim, yasi, gozRengi){
    this.isim = isim;
    this.yasi = yasi;
    this.gozRengi = gozRengi;
    this.isimDegistir = function(yeniIsim){ 
        this.isim = yeniIsim;
    }
}

var i1 = new insan("Ahmet", 20, "Kahverengi");
console.log(i1.isim+" "+i1.yasi+" "+i1.gozRengi);
i1.isimDegistir("Kamil");
console.log(i1.isim+" "+i1.yasi+" "+i1.gozRengi);
