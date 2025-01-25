let passwordLength = 16;
const InputEl = document.querySelector("#password");

function GeneratePassword() {
  const chars =
    "abcdefghjklmnpqrstuvwxyvABCDEFGHJKLMNPQRSTUVWXYZ123456789!@#$%¨&*()[]";

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomNumber, randomNumber + 1);
  }

  const InputEl = document.querySelector("#password");
  InputEl.value = password;
}
function copy() {
  navigator.clipboard.writeText(InputEl.value);
}

const passwordLengthEl = document.querySelector("#password-length");
passwordLengthEl.addEventListener("input", function () {
  passwordLength = passwordLengthEl.value;
  GeneratePassword();
});

const copyButtonEl = document.querySelector("#copy");
copyButtonEl.addEventListener("click", copy);

GeneratePassword();
