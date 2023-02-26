import { ListTemplate } from "./listTemplate";
const form = document.querySelector('form');
const input = document.querySelector('.input');
const genre = document.querySelector('#genre');
const book = document.querySelector('#book');
const author = document.querySelector('#author');
const stock = document.querySelector('#stock');
const price = document.querySelector('#price');
const ul = document.querySelector('ul');
const list = new ListTemplate();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    list.render(genre.value, book.value, author.value, stock.valueAsNumber, price.valueAsNumber, ul);
});
