
//define variables

const myLibrary = [];
const bookAuthor = document.getElementById('author');
const bookTitle = document.getElementById('title');
const bookPages = document.getElementById('pages-num');
const bookLang = document.getElementById('language');
const bookStatus = document.getElementById('read-status');
const submitBtn = document.getElementById('submit-btn');
const libraryDiv = document.getElementById('libraryDiv');
//constructor

function Book(title, author, pages, language, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.status = status;
    this.info = function() {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + 'written in ' + language + ' language, ' + status;
    }
};

//event listener
submitBtn.addEventListener('click', addBookToLibrary);

//Add user books to arr

function addBookToLibrary(event) {
    event.preventDefault();

    myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookLang.value, bookStatus.value));
    console.log(myLibrary);
    loopAndDisplay();
}

//Loop through books and display
function loopAndDisplay() {
    let newDiv = document.createElement('div');
    let newContent ='';
    if (libraryDiv.children.length === 0) {
        for(let i = 0; i < myLibrary.length; i++) {
        newContent = document.createTextNode(myLibrary[i].info());
        }
        //ovo moze samo dok ne postoji sacuvana baza knjiga.. cim bude morao da loopuje through more than 1 morace odmah da se appenduje newDiv

    } else {
        newContent = document.createTextNode(myLibrary[myLibrary.length-1].info());
    }
    newDiv.appendChild(newContent);
    libraryDiv.appendChild(newDiv);
}


