function gatherInputs (event) {
  event.preventDefault();
  const candle = document.querySelector("input[name='scent']:checked").value;
  const ship = document.getElementById("shipping").value;
  const payment = document.getElementById("payment").value;


let result; 
if (candle === "pumpkin") {
  result = "$9.00 due " + "\n" + ship + "\n" +payment
} else if (candle === "pine") {
  result = "$8.00 due " + "\n" +ship + "\n" + payment
} else if (candle === "rain") {
  result = "$7.00 due " + "\n" +ship + "\n" +payment
}
  // document.querySelector("div#hidden").removeAttribute("class")
  document.getElementById("output").innerText = result
  
}
 window.addEventListener("load" , function() {
const form = document.getElementById("purchase-form");
form.addEventListener("submit", gatherInputs);
 })