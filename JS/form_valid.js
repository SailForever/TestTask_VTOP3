//Ищем форму
const formFirstF = document.forms.firstF;

//Имя
const developersName = formFirstF.elements.developers;
const developersValue = developersName.value;
developersName.addEventListener('blur', (eo)=>developersBlur(false));
function developersBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const developersName = formFirstF.elements.developers;
  const developersValue = developersName.value;
  let bName = document.getElementById('nameDevelopersFail');
  let errors = 0;
  if ((developersValue.length > 40) || (developersValue.length < 2)) {
    bName.innerHTML = 'Введите пожалуйста имя больше 2-х символов!';
    errors++;
    if (focusError)
      developersName.focus();
  }
  else {
    bName.innerHTML = '';
  }
  return errors;
}

//Номер телефона
const webName = formFirstF.elements.nameWeb;
const webValue = webName.value;
webName.addEventListener('blur', (eo)=>webBlur(false));
function webBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const webName = formFirstF.elements.nameWeb;
  const webValue = webName.value;
  let bName = document.getElementById('nameWebFail');
  let errors = 0;
  if ((isNaN(webValue)) || (webValue=='') || (webValue.length < 4)) {
    bName.innerHTML = 'Введите пожалуйста номер больше 4-х цифр!';
    errors++;
    if (focusError)
      webName.focus();
  }
  else {
    bName.innerHTML = '';
  }
  return errors;
}

//Комментарий
const bigTextName = formFirstF.elements.bigText;
const bigTextValue = bigTextName.value;
bigTextName.addEventListener('blur', (eo)=>bigTextBlur(false));
function bigTextBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const bigTextName = formFirstF.elements.bigText;
  const bigTextValue = bigTextName.value;
  let bName = document.getElementById('bigTextFail');
  let errors = 0;
  if ((bigTextValue.length > 5000) || (bigTextValue.length < 10)) {
    bName.innerHTML = 'Введите пожалуйста комментарий больше 10 символов!';
    errors++;
    if (focusError)
      bigTextName.focus();
  }
  else {
    bName.innerHTML = '';
  }
  return errors;
}

//Кнопка отправить
formFirstF.addEventListener('submit',validateFirstF,false);

function validateFirstF (eo){
  eo = eo || window.event;
  let errorsAll=0;
  errorsAll+=developersBlur(!errorsAll);
  errorsAll+=webBlur(!errorsAll);
  errorsAll+=bigTextBlur(!errorsAll);
  if (errorsAll) {
    eo.preventDefault();
  }
}