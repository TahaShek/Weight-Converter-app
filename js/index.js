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
});










<div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Ounces</div>
  <div class="card-body">
    <h5 class="card-title">Weight In Ounces</h5>
    <p class="card-text" id="ozOutput"></p>
  </div>
</div>