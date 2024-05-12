const billAmount = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.getElementById("custom");
const resetBtn = document.getElementById("btn");
const errorMsg = document.getElementById("errorMsg");
billAmount.addEventListener("input", billAmountValue);
peopleInput.addEventListener("input", peopleInputValue);
tipCustom.addEventListener("input",tipCustomValue);
resetBtn.addEventListener("click",reset);
tips.forEach(function (tip) {
  tip.addEventListener("click", handleClick);
});

billAmount.value = "0.0";
peopleInput.value = "1";

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;
function billAmountValue() {
  billValue = parseFloat(billAmount.value);
  calculateTip()
}

function peopleInputValue() {
  peopleValue = parseFloat(peopleInput.value);
  calculateTip()
  if (peopleValue < 1){
     peopleInput.classList.add("error");
     errorMsg.classList.add("active");
     errorMsg.classList.remove("hide");
  }
  else{
    peopleInput.classList.remove("error");
     errorMsg.classList.remove("active");
     errorMsg.classList.add("hide");
  }
}

function tipCustomValue(){
   tipValue = parseFloat(tipCustom.value)/100;
   tips.forEach(function(tip){
    tip.classList.remove("active-tip")
   })
   calculateTip()
}

function handleClick(event) {
  tips.forEach(function (tip) {
    tip.classList.remove("active-tip");
    if (event.target.innerHTML === tip.innerHTML) {
      tip.classList.add("active-tip");
      tipValue = parseFloat(tip.innerHTML) / 100;
    }
  });
  calculateTip()
}

function reset(){
    billAmount.value = "0.0"
    billAmountValue()
    peopleInput.value = "1";
    peopleInputValue()
    tipCustom.value = "";

}
function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let totalAmount = (billValue* tipAmount) / peopleValue;
    tipPerPerson.innerHTML = "$" + (tipAmount).toFixed(2);
    totalPerPerson.innerHTML = "$" + (totalAmount).toFixed(2);
  }
}

