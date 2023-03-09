const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const formBody = {};

    const sendData = (data) => fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

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

    sendData(formBody).then((data) => { console.log(data); });
  });
};

export default sendForm;
