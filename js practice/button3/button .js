const myText = document.getElementById("myText");
const myBtn = document.getElementById("myBtn");
const myResult = document.getElementById("myResult");
 let age;
 
myBtn.onclick = function(){
    age =myText.value;
 age=Number(age);
  if (age>= 100){
    console.log("your are too old enogh to enter to the site");
    myResult.textContent =( `your are too old enogh to enter to the site`);
}
else if (age==0){
    console.log = ("your were jsut born");
    myResult.Contentext = (`your were jsut born`)
}
else if (age >=18){
  console.log("your old enogh to enter");
  myResult.textContent = (`your old enogh to enter`);
}
else if( age< 0){
    console.log = ("its not valueble");
    myResult.textContent = (`its not valuable`);
}
 else {
    console.log = ("you must be 18 years old");
    myResult.textContent = (`you must be 18 years old`)
 }








}
