const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const statusText = {
    loadText: 'Загрузка...',
    errorText: 'Ошибка',
    successText: 'Спасибо. Наш менеджер с вами свяжется!',
  };

  const validate = (list) => {
    const success = true;

    return success;
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    const sendData = (data) => fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    statusBlock.textContent = statusText.loadText;
    form.append(statusBlock);

    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody).then((data) => {
        statusBlock.textContent = statusText.successText;
        formElements.forEach((input) => {
          input.value = '';
        });
      })
        .catch((err) => { statusBlock.textContent = statusText.errorText; });
    } else {
      alert('Данные не валидны!');
    }
  };

  try {
    if (!form) {
      throw new Error('Не найдена форма!');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default sendForm;
