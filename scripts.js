let passwordLength = 16;
const InputEl = document.querySelector("#password");
const upperCaseCheckEl = document.querySelector("#uppercase-check");
const numberCheckEl = document.querySelector("#number-check");
const symbolCheckEl = document.querySelector("#symbol-check");
const securityIndicatorBarEl = document.querySelector("#security-indicator-bar")
 
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
  calculateQuality()

}

function calculateQuality(){
  const percent = Math.round(passwordLength / 64 * 100)

  console.log(percent)

  securityIndicatorBarEl.style.width = `${percent}%`
}

function copy() {
  navigator.clipboard.writeText(InputEl.value);
}

const passwordLengthEl = document.querySelector("#password-length");
passwordLengthEl.addEventListener("input", function () {
  passwordLength = passwordLengthEl.value;
  document.querySelector("#password-length-text").innerText = passwordLength
  GeneratePassword();
});
upperCaseCheckEl.addEventListener('click', GeneratePassword)
numberCheckEl.addEventListener('click', GeneratePassword)
symbolCheckEl.addEventListener('click', GeneratePassword)

document.querySelector("#copy-1").addEventListener("click", copy);
document.querySelector("#copy-2").addEventListener("click", copy);



GeneratePassword()