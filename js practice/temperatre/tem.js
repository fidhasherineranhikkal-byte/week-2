// const num = document.getElementById("num");
// const toCelsuis =document.getElementById("toCelsuis");
// const toFaranheit =document.getElementById("toFaranheit");
// const myResult = document.getElementById("myResult");
// let temp;
// function converter() {
//     if(toFaranheit.checked){
//         temp=Number(num.value);
//         temp =(temp * 9/5) +32;
//         myResult.textContent =temp.toFixed(2) +"f";
//     }
//   else if(toCelsuis.checked){
//     temp=Number(num.value);
//         temp =(temp-32) * (5/9);
//         myResult.textContent =temp.toFixed(2) +"c";

//   }
//   else{
//     myResult.textContent ="select a unit";
//   }
// }

let name = prompt("May I know your name?");
    document.getElementById("demo").innerHTML = "Hello, " + name + "!";