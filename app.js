var bill = document.querySelector(".bill");
var cash = document.querySelector(".cash");
var btn = document.querySelector(".check");

btn.addEventListener("click", function () {
  // Throwing error if bill amount is 0
  if (bill.value < 1) {
    alert("Bill amount needs to be greater than 0.");
  }
  // Throwing error if cash amount is less than bill amount
  if (cash.value < bill.value) {
    alert("The cash amount should be greater than the bill amount.");
  } else {
    console.log("Now we can proceed");
  }
});
