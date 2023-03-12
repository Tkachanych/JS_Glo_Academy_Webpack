const validate = (event, formElems = []) => {
  let result = true;
  if (formElems.length === 0) {
    return false;
  }
  const validateEmail = (mail) => {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailReg.test(mail);
  };

  formElems.forEach((elem) => {
    if (!result) {
      return false;
    }
    switch (elem.getAttribute('name')) {
      case 'user_email':
        result = validateEmail(elem.value);
        event === 'submit' && !result && elem.classList.add('error');
        break;
      case 'user_name':
        result = elem.value.length >= 2;
        event === 'submit' && !result && elem.classList.add('error');
        break;
      case 'user_phone':
        result = elem.value.length === 18;
        event === 'submit' && !result && elem.classList.add('error');
        break;
      default: result = true;
    }
  });

  return result;
};

export default validate;
