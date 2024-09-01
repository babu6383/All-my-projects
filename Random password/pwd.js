const passwordBox =document.getElementById("Password");
const length =12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+[]+{}_=";
const allChars = upperCase +lowerCase + numbers + symbols;

function createPassword(){
let Password = "";
Password += upperCase[Math.floor(Math.random()*upperCase.length)];
Password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
Password += numbers[Math.floor(Math.random()*numbers.length)];
Password += symbols[Math.floor(Math.random()*symbols.length)];


while(length > Password.length){
    Password += allChars[Math.floor(Math.random()*allChars.length)];
}
passwordBox.value = Password;
}

function copypassword(){
    passwordBox.select ();
    document.execCommand("copy");
    alert("Copied !")
}
