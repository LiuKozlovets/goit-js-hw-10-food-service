import menuTemplate from '../templates/menutemplate.hbs';
import items from '../menu.json';

const cardsMarkup = menuTemplate(items);

const menuCardsContainer = document.querySelector('.js-menu');
menuCardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

