// Sab se phela sare variable declare kro 

let output = document.querySelector(".output");
output.style.visibility = "hidden";
let EnterWeight = document.querySelector("#weightInput");
let grams = document.querySelector("#gramsOutput");
let pound = document.querySelector("#poundOutput");
let Ounces = document.querySelector("#ozOutput");

// function jo input field par lag rha ha  
// target madddad krta ha specific cheex hit krna mae 
// uska baad basic inner html mare formula use kro jo convert krna ka ha 

EnterWeight.addEventListener("input", function (e) {
  output.style.visibility = "visible";
  let kg = e.target.value;
  grams.innerHTML = kg * 1000;
  pound.innerHTML = kg * 2.20462;
  Ounces.innerHTML = kg * 35.274;

//  agar input 0 ha tu visibility show ni krni 

  if(grams.innerHTML==0 && pound.innerHTML==0 && Ounces.innerHTML ==0){
    output.style.visibility = "hidden";
    return;
  }

//   agar input field empty ha tu kch show ni krna 

  if(grams.innerHTML==='' && pound.innerHTML=='' && Ounces.innerHTML ==0){
    output.style.visibility = "hidden";
    return;
  }

 
});










