export class ListTemplate{

    render(genre:string,book:string,author:string,stock:number,price:number,container:HTMLUListElement){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText=book;

        const p = document.createElement('p');
        p.innerText='genre: ' + genre + '\nathor: ' + author + '\nstock: ' + stock + '\nprice: ' + price;

        li.append(h4);
        li.append(p);
        container.append(li);
    }
}