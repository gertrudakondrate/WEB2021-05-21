// apsirasau funkcija kuri bus neveiksmi, kol jos neiskviesim
function add(number1, number2) {
    let sum = number1 + number2;
    alert(number1 + number2);
}


function getShopingCart() {
    return ["Morkos", "Bulves", "Cesnakai"];
 }

function fillList(array, targetElement) {
    targetElement.innerHTML = "";



   for (let index = 0; index < array.length; index++) {
       const element = array[index];

         let li = document.createElement("li"); //sukuriamas elementas
       li.innerText = element; //li elementui priskiramas tekstas is masyvo

        targetElement.append(li); //suformuota li elementa idedame i ul elementa
    }
}