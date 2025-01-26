let passwordLength = 16;
const InputEl = document.querySelector("#password");
const upperCaseCheckEl = document.querySelector("#uppercase-check");
const numberCheckEl = document.querySelector("#number-check");
const symbolCheckEl = document.querySelector("#symbol-check");
const securityIndicatorBarEl = document.querySelector(
  "#security-indicator-bar"
);

function GeneratePassword() {
  let chars = "abcdefghjklmnpqrstuvwxyv123456789";

  const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const numbersChars = "123456789";
  const symbolsChars = "!@#$%¨&*()[]";

  if (upperCaseCheckEl.checked) {
    chars += upperCaseChars;
  }
  if (numberCheckEl.checked) {
    chars += numbersChars;
  }
  if (symbolCheckEl.checked) {
    chars += symbolsChars;
  }

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomNumber, randomNumber + 1);
  }

  const InputEl = document.querySelector("#password");
  InputEl.value = password;
  calculateQuality();
  calculateFontSize()
}

function calculateQuality() {
  const percent =
    Math.round(passwordLength / 64) * 25 +
    (upperCaseCheckEl.checked ? 15 : 0) +
    (numberCheckEl.checked ? 25 : 0) +
    (symbolCheckEl.checked ? 35 : 0);

  console.log(percent);

  securityIndicatorBarEl.style.width = `${percent}%`;

  if (percent > 69) {
    // safe
    securityIndicatorBarEl.classList.remove("critical");
    securityIndicatorBarEl.classList.remove("warning");
    securityIndicatorBarEl.classList.add("safe");
  } else if (percent > 50) {
    // warning
    securityIndicatorBarEl.classList.remove("critical");
    securityIndicatorBarEl.classList.add("warning");
    securityIndicatorBarEl.classList.remove("safe");
  } else {
    // critical
    securityIndicatorBarEl.classList.add("critical");
    securityIndicatorBarEl.classList.remove("warning");
    securityIndicatorBarEl.classList.remove("safe");
  }

  if (percent >= 100) {
    securityIndicatorBarEl.classList.add("completed");
  } else {
    securityIndicatorBarEl.classList.remove("completed");
  }
}
function calculateFontSize() {
  if (passwordLength > 45) {
    InputEl.classList.remove("font-xs");
    InputEl.classList.remove("font-sm");
    InputEl.classList.add("font-xxs");
  } else if (passwordLength > 32) {
    InputEl.classList.add("font-xs");
    InputEl.classList.remove("font-sm");
    InputEl.classList.remove("font-xxs");
  } else if (passwordLength > 22) {
    InputEl.classList.remove("font-xs");
    InputEl.classList.add("font-sm");
    InputEl.classList.remove("font-xxs");
  } else {
    InputEl.classList.remove("font-xs");
    InputEl.classList.remove("font-sm");
    InputEl.classList.remove("font-xxs");

  }
}

function copy() {
  navigator.clipboard.writeText(InputEl.value);
}

const passwordLengthEl = document.querySelector("#password-length");
passwordLengthEl.addEventListener("input", function () {
  passwordLength = passwordLengthEl.value;
  document.querySelector("#password-length-text").innerText = passwordLength;
  GeneratePassword();
});
upperCaseCheckEl.addEventListener("click", GeneratePassword);
numberCheckEl.addEventListener("click", GeneratePassword);
symbolCheckEl.addEventListener("click", GeneratePassword);

document.querySelector("#copy-1").addEventListener("click", copy);
document.querySelector("#copy-2").addEventListener("click", copy);
document.querySelector('#renew').addEventListener('click', GeneratePassword)

GeneratePassword();
