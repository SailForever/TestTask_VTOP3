//find form
const formFirstF = document.forms.firstF;

//firstName
const firstNameJs = formFirstF.elements.firstName;
const firstNameJsValue = firstNameJs.value;
firstNameJs.addEventListener('blur', (eo)=>firstNameBlur(false));
function firstNameBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const firstNameJs = formFirstF.elements.firstName;
  const firstNameJsValue = firstNameJs.value;
  let errors = 0;
  if ((firstNameJsValue.length > 40) || (firstNameJsValue.length < 2)) {
    firstNameJs.placeholder="Enter your First Name";
    errors++;
    if (focusError)
      firstNameJs.focus();
  }
  return errors;
}

//lastName
const lastNameJs = formFirstF.elements.lastName;
const lastNameJsValue = lastNameJs.value;
lastNameJs.addEventListener('blur', (eo)=>lastNameBlur(false));
function lastNameBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const lastNameJs = formFirstF.elements.lastName;
  const lastNameJsValue = lastNameJs.value;
  let errors = 0;
  if ((lastNameJsValue.length > 40) || (lastNameJsValue.length < 2)) {
    lastNameJs.placeholder="Enter your Last Name";
    errors++;
    if (focusError)
      lastNameJs.focus();
  }
  return errors;
}

//Nationality
const nationalityJs = formFirstF.elements.nationality;
const nationalityJsValue = nationalityJs.value;
nationalityJs.addEventListener('change', (eo)=>nationalityChange(false));
function nationalityChange(focusError) {
  const formFirstF = document.forms.firstF;
  const nationalityJs = formFirstF.elements.nationality;
  const nationalityJsValue = nationalityJs.value;
  let errors = 0;
  if (nationalityJsValue == 0) {
    errors++;
    if (focusError)
      nationalityJs.focus();
  }
  return errors;
}

//email
const emailName = formFirstF.elements.email;
const emailValue = emailName.value;
emailName.addEventListener('blur', (eo)=>emailBlur(false));
function emailBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const emailName = formFirstF.elements.email;
  const emValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  let errors=0;
  if (!(isEmailValid(emailName.value))) {
    emailName.placeholder = 'Enter your E-mail';
    errors++;
    if (focusError)
      emailName.focus();
  }
    function isEmailValid(value) {
      return emValid.test(value);
    }
  return errors;
}

//Date of Birth
const dataName = formFirstF.elements.dateWeb;
const dataValue = dataName.value;
dataName.addEventListener('blur', (eo)=>dateBlur(false));
function dateBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const dataName = formFirstF.elements.dateWeb;
  const dataValue = dataName.value;
  let errors = 0;
  if (dataValue.length<1 || (dataValue>'2024-01-01') || (dataValue<'1900-01-01')) {
    dataName.placeholder = 'Enter your Date of Birth';
    errors++;
    if (focusError)
      dataName.focus();
  }
  return errors;
}

//Gender
var elemsRadio = formFirstF.elements.gender;
const elemsRadioValue=elemsRadio.value;
for (var i = elemsRadio.length - 1; i >= 0; i--) {
  const elemRadio = elemsRadio[i];
  elemRadio.addEventListener('click', ()=>validAnswer(elemRadio));
};
var errorsRadio= 0;
var bNameRadio = document.getElementById('nameRadioFail');
function validAnswer (elemRadio) {
  if (elemRadio.checked == true) {
    errorsRadio++;
    bNameRadio.innerHTML = '';
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
  let bName = document.getElementById('namePasswordFail');
  let uppers = /[A-Z]/; // There is at least one letter in upper case
  let lowers = /[a-z]/; // There is at least one letter in lower case
  let numbers = /\d/; // There is at least one figure
  let onlylatin = /^[A-Za-z\d]{8,}$/; //The password must be at least 8 characters long. The password uses only Latin letters and numbers.
  let errors = 0;

  if (!(isPasswordUpper(passwordJs.value)) || !(isPasswordLowers(passwordJs.value)) || !(isPasswordNumbers(passwordJs.value)) || !(isPasswordOnlylatin(passwordJs.value))) {
    bName.innerHTML = 'Enter your Password (from 8 characters and using numbers and upper and lower case letters)';
    errors++;
    if (focusError)
      passwordJs.focus();
  }
  else bName.innerHTML = '';

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
  let bName = document.getElementById('nameConfirmPasswordFail');
  let errors = 0;
  if (confirmPasswordJSValue.length<1 || confirmPasswordJSValue!==passwordJsValue) {
    bName.innerHTML = "Passwords don't match";
    errors++;
    if (focusError)
      passwordJs.focus();
  }
  else bName.innerHTML = '';
  return errors;
}


//submit
formFirstF.addEventListener('submit',validateFirstF,false);

function validateFirstF (eo){
  eo = eo || window.event;
  let errorsAll=0;
  errorsAll+=firstNameBlur(!errorsAll);
  errorsAll+=lastNameBlur(!errorsAll);
  errorsAll+=nationalityChange(!errorsAll);
  errorsAll+=emailBlur(!errorsAll);
  errorsAll+=dateBlur(!errorsAll);
  if (errorsRadio == 0) {
    eo.preventDefault();
    document.getElementById('nameRadioFail').innerHTML = 'Place a tick in the box.';
  }
  errorsAll+=passwordJsBlur(!errorsAll);
  errorsAll+=confirmPasswordJSBlur(!errorsAll);
  if (errorsAll) {
    eo.preventDefault();
  }
  if (!errorsAll) {
    ajaxForm();
    eo.preventDefault();
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
  const elemsRadioValue=elemsRadio.value;
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
