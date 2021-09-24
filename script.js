var btnCheck = document.querySelector("#btn-check");

var birthdayInput = document.querySelector("#birthday");

var luckyInput = document.querySelector("#lucky");

var outputText = document.querySelector("#output");

btnCheck.addEventListener("click", clickHandler);

function clickHandler() {
  var birthdayDigits = birthdayInput.value.replace(/-/g, 0);
  console.log(birthdayDigits);
  var sum = 0;
  for (var i = 0; i < birthdayDigits.length; i++) {
    sum = sum + Number(birthdayDigits[i]);
  }
  if (sum % luckyInput.value === 0) {
    outputText.innerText = "Your Birthday is Lucky! 🔮";
  } else {
    outputText.innerText = "Your Birthday is not that Lucky! 😯";
  }
}
