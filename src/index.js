import timer from './modules/timer';
import toggleMenu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import tabs from './modules/tabs';
import slider from './modules/slider';
import addRules from './modules/rules';
import sendForm from './modules/sendForm';

timer('15 march 2023');
toggleMenu();
modal();
addRules();
calc(100);
tabs();
slider();
sendForm({
  formId: 'form1,form2,form3',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
