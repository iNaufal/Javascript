console.log("Javascript from external file");

// Variable (Let, Var, Const)
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
  let lastName = "Mares"; //hanya bisa di jalankan didalam dictionary
  console.log(lastName);
}
console.log(lastName);

//Scope from var
var middleName = "Nice";
{
  var middleName = "Noble"; //global bisa di jalankan diluar dari dictionary
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

//Data Types (String, number, boolean, undifined)
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
//end Data Types

//String (Escaping & Literal)
//escaping string (\' \" \\ \n \r \t \b \f)
let data1 = 'Veno said "Hello world!"';
console.log(data1);
let data2 = "Venom said \"Lets go\"";
console.log(data2);
let data3 = "Veno is on holiday \nLets go";
console.log(data3);

//Literal string (template literal string)
let fName = "Veno";
let lName = "Mare";
let age = 18;
let fullName = age + " " + fName + " " + lName; //not like this
console.log(fullName);
//yes like this
let biodata = `${fName} ${lName} dengan umur ${age}`;
console.log(biodata);