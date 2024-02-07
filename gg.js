const catalog = [
    {
        title: 'Евгений Онегин ',
        author: 'Пушкин А.С.'
    },
    {
        title: 'Гарри Поттер',
        author: 'Дж. Роулинг '
    },
    {
        title: 'Капитанская Дочка ',
        author: 'Пушкин А.С. '
    },
    {
        title: 'Гинирейшин P ',
        author: 'Пелевин '
    },
    {
        title: 'Властелин Колец ',
        author: 'Толкин'
    },
    {
        title: 'АмпирV ',
        author: 'Пелевин'
    }
];

let BookTostring = (book) => `"${book.title}." ${book.author}`

function BookTostring(book){
return `'${book.title}' / ${book.author}`;  
}

function showBooks(arryOfBook){
    let index = 1 ;
    for(let book of catalog) {
        let bookStr = BookTostring(book);
        console.log(`${index}. ${BookTostring(book)}`)
        index ++
    }
}

function filterByAuthor(books, query){
    let result = [];
   if (book.author.toLoo.starsWith(query)) {
    result.push(book);
   }
   return result;
   }

let filteredCatalog = filterByAuthor(catalog, 'p')
showBooks(filteredCatalog, BookTostring)
//showBooks(catalog, BookTostring)

//console.log(BookTostring(catalog[0]));