// let gmCar = document.querySelector(".gm-car")
// console.log(gmCar);

// let gmCars = document.querySelectorAll(".gm-car")
// console.log(gmCars[1]);



//value = elementni ichiga yozilgan narsani console log qiladi.
// let inputElement = document.querySelector("#name")
// console.log(inputElement.value);

// function formSubmit(){
//     console.log(inputElement.value);
// }




let son_1 = document.querySelector("#son_1")
let son_2 = document.querySelector("#son_2")
let resultElement = document.querySelector("#result")
let result = 0;

function sonniQoshish(){
    result= Number(son_1.value) + Number(son_2.value)
    resultElement.innerHTML = result;
}


function sonniAyirish(){
    result= Number(son_1.value) - Number(son_2.value)
    resultElement.innerHTML = result;
}


function sonniKopaytirish(){
    result= Number(son_1.value) * Number(son_2.value)
    resultElement.innerHTML = result;
}


function sonniBolish(){
    result= Number(son_1.value) / Number(son_2.value)
    resultElement.innerHTML = result;
}