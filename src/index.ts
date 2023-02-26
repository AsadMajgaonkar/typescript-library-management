import { ListTemplate } from "./listTemplate";

const form = document.querySelector('form') as HTMLFormElement

const input = document.querySelector('.input')!;

const genre = document.querySelector('#genre') as HTMLSelectElement;
const book = document.querySelector('#book') as HTMLInputElement;
const  author = document.querySelector('#author') as HTMLInputElement;
const stock = document.querySelector('#stock') as HTMLInputElement;
const price = document.querySelector('#price') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate();

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();
    list.render(genre.value,book.value,author.value,stock.valueAsNumber,price.valueAsNumber,ul);  
})