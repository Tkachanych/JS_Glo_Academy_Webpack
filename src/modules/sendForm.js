import validate from './validation';

const sendForm = ({ formId, someElem = [] }) => {
  const forms = formId.split(',');
  const statusBlock = document.createElement('div');
  const statusText = {
    loadText: 'Загрузка...',
    errorText: 'Ошибка',
    successText: 'Спасибо. Наш менеджер с вами свяжется!',
  };

  const submitForm = (form) => {
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
    statusBlock.style.mixBlendMode = 'screen';
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
        console.log(data);
      })
        .catch((err) => { statusBlock.textContent = statusText.errorText; });
    } else {
      alert('Данные не валидны!');
    }
  };

  forms.forEach((id) => {
    const form = document.getElementById(id);

    try {
      if (!form) {
        throw new Error(`Не найдена форма с ID = ${id}`);
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        submitForm(form);
      });
    } catch (err) {
      console.log(err.message);
    }
  });
};

export default sendForm;
