const validate = (formElems = []) => {
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
        !result && elem.classList.add('error');
        break;
      case 'user_name':
        result = elem.value.length >= 2;
        !result && elem.classList.add('error');
        break;
      case 'user_phone':
        result = elem.value.length === 18;
        !result && elem.classList.add('error');
        break;
      case 'user_message':
        result = elem.value.length > 0;
        !result && elem.classList.add('error');
        break;
      default: result = false;
    }
  });

  return result;
};

export default validate;
