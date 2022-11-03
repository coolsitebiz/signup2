const pass = document.querySelector('#pass');
const passConfirm = document.querySelector('#pass-confirm');

pass.addEventListener('input', setError);
passConfirm.addEventListener('input', setError);

function passesMatch() {
  if (pass.value === passConfirm.value) {
    return true;
  }
}

function setError() {
  if (passesMatch()) {
    pass.classList.remove('error');
    passConfirm.classList.remove('error');
  } else {
    pass.classList.add('error');
    passConfirm.classList.add('error');
  }
}
