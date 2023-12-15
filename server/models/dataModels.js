let books=[
    {
        id:1,
        title:"The Alchemist",
        author:"Paulo Coelho",
        price: 10,
    },
    {
     id:2,
     title:"The second book",
     author:"Paulo Coelho",
     price: 20,
    }
];
exports.clientData = () => {
    return books;
};
exports.addBooks = (newBook) => {
    books=[...books,...newBook];
    return books;
}
​
exports.updateBooks = (updatedBook) => {
       books[updatedBook.id-1] = updatedBook;
    return books;
}
