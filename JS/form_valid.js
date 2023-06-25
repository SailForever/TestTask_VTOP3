//find form
const formFirstF = document.forms.firstF;

//firstName
const firstNameJs = formFirstF.elements.firstName;
const firstNameJsValue = firstNameJs.value;
firstNameJs.addEventListener('blur', (eo) => firstNameBlur(false));
function firstNameBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const firstNameJs = formFirstF.elements.firstName;
  const firstNameJsValue = firstNameJs.value;
  const firstNameRedBorder = document.querySelector('.formText1');
  let errors = 0;
  if ((firstNameJsValue.length > 40) || (firstNameJsValue.length < 2)) {
    firstNameJs.placeholder = "Enter your First Name";
    firstNameRedBorder.style.borderBottom = '2px solid #FF2828';
    errors++;
    if (focusError)
      firstNameJs.focus();
  }
  else {
    firstNameRedBorder.style.borderBottom = '1px solid #F2F2F2';
  }
  return errors;
}

//lastName
const lastNameJs = formFirstF.elements.lastName;
const lastNameJsValue = lastNameJs.value;
lastNameJs.addEventListener('blur', (eo) => lastNameBlur(false));
function lastNameBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const lastNameJs = formFirstF.elements.lastName;
  const lastNameJsValue = lastNameJs.value;
  const lastNameRedBorder = document.querySelector('.formText2');
  let errors = 0;
  if ((lastNameJsValue.length > 40) || (lastNameJsValue.length < 2)) {
    lastNameJs.placeholder = "Enter your Last Name";
    lastNameRedBorder.style.borderBottom = '2px solid #FF2828';
    errors++;
    if (focusError)
      lastNameJs.focus();
  }
  else {
    lastNameRedBorder.style.borderBottom = '1px solid #F2F2F2';
  }
  return errors;
}

//Nationality
const nationalityJs = formFirstF.elements.nationality;
const nationalityJsValue = nationalityJs.value;
nationalityJs.addEventListener('blur', (eo) => nationalityChange(false));
nationalityJs.addEventListener('change', (eo) => nationalityChange(false));
function nationalityChange(focusError) {
  const formFirstF = document.forms.firstF;
  const nationalityJs = formFirstF.elements.nationality;
  const nationalityJsValue = nationalityJs.value;
  const nationalityRedBorder = document.querySelector('.formText3');
  const nationalitySelectColor = document.getElementById('selectColor');
  const nationalityChooseNat = document.getElementById('chooseNat')
  let errors = 0;
  if (nationalityJsValue == 0) {
    nationalityRedBorder.style.borderBottom = '2px solid #FF2828';
    nationalitySelectColor.style.color = '#FF2828';
    nationalityChooseNat.innerText = 'Choose your Nationality';
    errors++;
    if (focusError)
      nationalityJs.focus();
  }
  else {
    nationalityRedBorder.style.borderBottom = '1px solid #F2F2F2';
    nationalitySelectColor.style.color = '';
  }
  return errors;
}

//email
const emailName = formFirstF.elements.email;
const emailValue = emailName.value;
emailName.addEventListener('blur', (eo) => emailBlur(false));
function emailBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const emailName = formFirstF.elements.email;
  const emValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const emailRedBorder = document.querySelector('.formText4');
  let errors = 0;
  if (!(isEmailValid(emailName.value))) {
    emailName.placeholder = 'Enter your E-mail';
    emailRedBorder.style.borderBottom = '2px solid #FF2828';
    errors++;
    if (focusError)
      emailName.focus();
  }
  else {
    emailRedBorder.style.borderBottom = '1px solid #F2F2F2';
  }
  function isEmailValid(value) {
    return emValid.test(value);
  }
  return errors;
}

//Date of Birth
const dataName = formFirstF.elements.dateWeb;
const dataValue = dataName.value;
dataName.addEventListener('blur', (eo) => dateBlur(false));
function dateBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const dataName = formFirstF.elements.dateWeb;
  const dataValue = dataName.value;
  const dateChoose = document.getElementById('dateCh')
  const dateRedBorder = document.querySelector('.formText5');
  let errors = 0;
  if (dataValue.length < 1 || (dataValue > '2024-01-01') || (dataValue < '1900-01-01')) {
    dataName.placeholder = 'Enter your Date of Birth';
    dateChoose.style.color = '#FF2828';
    dateRedBorder.style.borderBottom = '2px solid #FF2828';
    errors++;
    if (focusError)
      dataName.focus();
  }
  else {
    dateChoose.style.color = '';
    dateRedBorder.style.borderBottom = '1px solid #F2F2F2';
  }
  return errors;
}

//Gender
var elemsRadio = formFirstF.elements.gender;
const elemsRadioValue = elemsRadio.value;
for (var i = elemsRadio.length - 1; i >= 0; i--) {
  const elemRadio = elemsRadio[i];
  elemRadio.addEventListener('click', () => validAnswer(elemRadio));
};
var errorsRadio = 0;
function validAnswer(elemRadio) {
  if (elemRadio.checked == true) {
    errorsRadio++;
    const radioColor1 = document.querySelector('.radio1Txt')
    const radioColor2 = document.querySelector('.radio2Txt')
    radioColor1.style.color = '';
    radioColor2.style.color = '';
  }
  return errorsRadio;
}

//password
const passwordJs = formFirstF.elements.password;
var passwordJsValue;
passwordJs.addEventListener('blur', (eo) => passwordJsBlur(false));
function passwordJsBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const passwordJs = formFirstF.elements.password;
  passwordJsValue = passwordJs.value;
  const passwordBorder = document.querySelector('.formText7');
  let uppers = /[A-Z]/; // There is at least one letter in upper case
  let lowers = /[a-z]/; // There is at least one letter in lower case
  let numbers = /\d/; // There is at least one figure
  let onlylatin = /^[A-Za-z\d]{8,}$/; //The password must be at least 8 characters long. The password uses only Latin letters and numbers.
  let errors = 0;

  if (!(isPasswordUpper(passwordJs.value)) || !(isPasswordLowers(passwordJs.value)) || !(isPasswordNumbers(passwordJs.value)) || !(isPasswordOnlylatin(passwordJs.value))) {
    passwordJs.placeholder = "Enter your Password";
    passwordBorder.style.borderBottom = '2px solid #FF2828';
    errors++;
    if (focusError)
      passwordJs.focus();
  }
  else {
    passwordBorder.style.borderBottom = '1px solid #F2F2F2';
  }
  function isPasswordUpper(value) {
    return uppers.test(value);
  }
  function isPasswordLowers(value) {
    return lowers.test(value);
  }
  function isPasswordNumbers(value) {
    return numbers.test(value);
  }
  function isPasswordOnlylatin(value) {
    return onlylatin.test(value);
  }
  return errors;
}

//confirmPassword
const confirmPasswordJS = formFirstF.elements.confirmPassword;
const confirmPasswordJSValue = confirmPasswordJS.value;
confirmPasswordJS.addEventListener('blur', (eo) => confirmPasswordJSBlur(false));
function confirmPasswordJSBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const confirmPasswordJS = formFirstF.elements.confirmPassword;
  const confirmPasswordJSValue = confirmPasswordJS.value;
  const confirmPasswordBorder = document.querySelector('.formText8');
  let errors = 0;
  if (confirmPasswordJSValue.length < 1 || confirmPasswordJSValue !== passwordJsValue) {
    confirmPasswordJS.placeholder = "Compare passwords";
    confirmPasswordBorder.style.borderBottom = '2px solid #FF2828';
    errors++;
    if (focusError)
      passwordJs.focus();
  }
  else {
    confirmPasswordBorder.style.borderBottom = '1px solid #F2F2F2';
  }
  return errors;
}


//submit
formFirstF.addEventListener('submit', validateFirstF, false);

const showS = document.querySelector('.formText11');
showS.style.display = 'none';

function validateFirstF(eo) {
  eo = eo || window.event;
  let timer;
  let errorsAll = 0;

  errorsAll += firstNameBlur(!errorsAll);
  errorsAll += lastNameBlur(!errorsAll);
  errorsAll += nationalityChange(!errorsAll);
  errorsAll += emailBlur(!errorsAll);
  errorsAll += dateBlur(!errorsAll);
  if (errorsRadio == 0) {
    eo.preventDefault();
    const radioColor1 = document.querySelector('.radio1Txt')
    const radioColor2 = document.querySelector('.radio2Txt')
    radioColor1.style.color = '#FF2828';
    radioColor2.style.color = '#FF2828';
  }
  errorsAll += passwordJsBlur(!errorsAll);
  errorsAll += confirmPasswordJSBlur(!errorsAll);
  if (errorsAll) {
    const shake = document.querySelector('.formInp10');
    shake.style.animation = '1.2s ease-in-out 0s normal none running trambling-animation';
    timer = setInterval(timeAnim, 3000)
    function timeAnim() {
      timeShake();
    }
    eo.preventDefault();
  }
  if (!errorsAll) {
    const formFirstF = document.forms.firstF;
    ajaxForm();
    let firstNameClear = formFirstF.elements.firstName;
    firstNameClear.value = '';
    firstNameClear.placeholder='';
    let lastNameClear = formFirstF.elements.lastName;
    lastNameClear.value = '';
    lastNameClear.placeholder='';
    let nationalityClear = formFirstF.elements.nationality;
    nationalityClear.value = '';
    let emailNameClear = formFirstF.elements.email;
    emailNameClear.value = '';
    emailNameClear.placeholder='';
    let dataNameClear = formFirstF.elements.dateWeb;
    dataNameClear.value = '';
    let passwordClear = formFirstF.elements.password;
    passwordClear.value = '';
    passwordClear.placeholder='';
    let confirmPasswordClear = formFirstF.elements.confirmPassword;
    confirmPasswordClear.value = '';
    confirmPasswordClear.placeholder='';

    const showS = document.querySelector('.formText11');
    showS.style.display = '';
    timer = setInterval(timeAnim, 3000)
    function timeAnim() {
      timeShow();
    }
    eo.preventDefault();
  }
  function timeShake() {
    const shake = document.querySelector('.formInp10');
    shake.style.animation = '';
    clearInterval(timer)
  }
  function timeShow() {
    showS.style.display = 'none';
    clearInterval(timer)
  }
}


function ajaxForm() {

  const ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
  var nameEr = 'ERMOLOVICH_T5';

  const firstNameJsValue = firstNameJs.value;
  const lastNameJsValue = lastNameJs.value;
  const nationalityJsValue = nationalityJs.value;
  const emailValue = emailName.value;
  const dataValue = dataName.value;
  const elemsRadio = formFirstF.elements.gender;
  const elemsRadioValue = elemsRadio.value;
  const passwordJsValue = passwordJs.value;
  const confirmPasswordJSValue = confirmPasswordJS.value;

  let password;
  let resultEr;

  password = Math.random();
  $.ajax({
    url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
    data: { f: 'LOCKGET', n: nameEr, p: password },
    success: resultFunc, error: errorHandler
  }
  );

  function resultFunc(resultFull) {
    resultEr = [];
    resultEr = JSON.parse(resultFull.result)
    resultEr.push({
      firstName: firstNameJsValue, lastName: lastNameJsValue,
      nationality: nationalityJsValue, email: emailValue,
      dateWeb: dataValue, gender: elemsRadioValue,
      password: passwordJsValue, confirmPassword: confirmPasswordJSValue
    })
    $.ajax({
      url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
      data: { f: 'UPDATE', n: nameEr, v: JSON.stringify(resultEr), p: password },
      success: update_resultReady, error: errorHandler
    }
    );
  }
  function update_resultReady(ready) {
    console.log(ready.result)
  }

  function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
  }
}