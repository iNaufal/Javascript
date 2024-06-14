console.log("Javascript from external file");

//Variable with let
let name = "Venomare";
//Tampilkan data
console.log(name);
//Manipulation variable
name = "Veno";
console.log(name);

//Variable with var
var firstName = "Veno";
console.log(firstName);
firstName = "Mare";
console.log(firstName);

//Scope from let
let lastName = "Mare";
{
  let lastName = "Mares"; //hanya bisa di jalanankan didalam dictionary
  console.log(lastName);
}
console.log(lastName);

//Scope from var
var middleName = "Nice";
{
  var middleName = "Noble"; //global bisa di diluar dari dictionary
  console.log(middleName);
}
console.log(middleName);

//Special case without keyword, otomatis jadi var
fruit = "Orange";
{
  fruit = "manggo";
}
console.log(fruit);

//Const
const birthDay = "5 Mei 1995";
console.log(birthDay);
//birthDay = "25 Mei 1995";
//end Variable

//Data Types
let dataString = "Veno"; //string
console.log(dataString)
console.log(typeof dataString);

let dataNumber = 18.743; //number
console.log(dataNumber);
console.log(typeof dataNumber);

let dataBoolean = false; //boolean
console.log(dataBoolean);
console.log(typeof dataBoolean);

dataString = 2;
console.log(dataString)
console.log(typeof dataString);

let dataKosong; //undifined
console.log(dataKosong);
console.log(typeof dataKosong);
dataKosong = "Veno";
console.log(dataKosong);
console.log(typeof dataKosong);