// Every 2 scoops (2 table spoon) = 1 serving of 6oz

// 1 scoop (1 tablespoon) = 1 serving (6oz)
// 10 servings (60oz) = 1/2 cup (8 table spoons)

let coffeeForm = document.getElementById('coffee-calc-form');
let cupsAmount = document.getElementById('cups-input');
let fillPot = document.getElementsByClassName('fill-pot')[0];
let waterAmount = document.getElementsByClassName('water-needed')[0];
let scoops = document.getElementsByClassName('scoops-needed')[0];
let outputContainer = document.getElementById('output-wrapper');
let instructions = document.getElementsByClassName('instructions')[0];

function cupsFunction() {

   numScoops = cupsAmount.value * 1;
   console.log(numScoops);

   // Serving of 1 cup (6oz)
   waterOz = cupsAmount.value * 6; 
   console.log(waterOz + " Amount of oz it will make value");

   potCupLine = waterOz / 6;
   console.log(potCupLine + " fill pot to this cup line");
   
   scoops.innerHTML = `<img src="/images/scoop-icon.png" alt="" class="icon"/> ${numScoops} scoops`;
   scoops.style = "opacity: 1;";
   waterAmount.innerHTML = `<img src="/images/measuring-cup-icon.png" alt="" class="icon"/> ${waterOz}oz of water`;
   waterAmount.style = "opacity: 1;";
   fillPot.innerHTML = `<img src="/images/coffee-pot-icon.png" alt="" class="icon"/> <br> ${potCupLine} servings`;
   fillPot.style = "opacity: 1;";

   document.getElementById('line-break').style = "width: 100%; height: 1px;";

   instructions.innerHTML = `It will take ${waterOz}oz of water to fill the  coffee pot to the ${potCupLine} cups line on your coffee pot. Next add ${numScoops} scoops (1 tablespoon) of ground coffee to the coffee filter basket.`;
   instructions.style = "opacity: 1;";

   // instructions.append(numScoops);

   document.getElementById('cups-input').value = "";  
   
};

// function clearForm(){
//    cupsAmount.value = "";
// }