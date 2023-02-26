export class ListTemplate {
    render(genre, book, author, stock, price, container) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = book;
        const p = document.createElement('p');
        p.innerText = 'genre: ' + genre + '\nathor: ' + author + '\nstock: ' + stock + '\nprice: ' + price;
        li.append(h4);
        li.append(p);
        container.append(li);
    }
}
