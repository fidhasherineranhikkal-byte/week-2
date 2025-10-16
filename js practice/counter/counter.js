 const decBtn =document.getElementById("decBtn");
 const incBtn=document.getElementById("incBtn");

  const reset =document.getElementById("reset");
   const countLabel=document.getElementById("countLabel");

let count= 0;
incBtn.onclick= function(){
    count++;
    countLabel.textContent = count;
}
decBtn.onclick= function(){
    count--;
    countLabel.textContent = count;
}
reset.onclick= function(){
    count = 0;
    countLabel.textContent = count;
}
