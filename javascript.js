
//define variables
const myLibrary = [];
const bookAuthor = document.getElementById('author');
const bookTitle = document.getElementById('title');
const bookPages = document.getElementById('pages-num');
const bookLang = document.getElementById('language');
const submitBtn = document.getElementById('submit-btn');
const libraryDiv = document.getElementById('libraryDiv');

//constructor
function Book(title, author, pages, language) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.status = status;
    this.info = function() {
        return 'Title: ' + title + 
        '\nBy: ' + author + '\nNumber of pages: ' + pages + '\nLanguage: ' + language;
    }
};

//event listener
submitBtn.addEventListener('click', addBookToLibrary);

//Add user books to arr
function addBookToLibrary(event) {
    event.preventDefault();
    myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookLang.value));
    console.log(myLibrary);
    loopAndDisplay();
}

//Loop through books and display them
function loopAndDisplay() {

//variables for book cards
    let newDiv = document.createElement('div');
    let newContent = '';
    let readSwitch = document.createElement('div');
    let delBtn = document.createElement('div');

//add html
    readSwitch.innerHTML = '<label class="switch"><input type="checkbox"><span class="slider round"></span></label>'
    delBtn.innerHTML = '<i class="fa-solid fa-x"></i>'; 

 //loop through library  

    if (libraryDiv.children.length === 0) {
        for(let i = 0; i < myLibrary.length; i++) {
        newContent = document.createTextNode(myLibrary[i].info());
        }
        //ovo moze samo dok ne postoji sacuvana baza knjiga.. cim bude morao da loopuje through more than 1 morace odmah da se appenduje newDiv

    } else {
        newContent = document.createTextNode(myLibrary[myLibrary.length-1].info());
    }

//append elements
    newDiv.classList.add('book-card');
    delBtn.classList.add('del-btn');
    newDiv.appendChild(delBtn);
    newDiv.appendChild(newContent);
    newDiv.appendChild(readSwitch);
    libraryDiv.appendChild(newDiv);


//add event listeners for book card buttons
    delBtn.addEventListener('click', deleteBook);    
    readSwitch.addEventListener('click', readFunc)
}

//delete function

function deleteBook(e) {
    e.target.closest('.book-card').remove();
}

//read function

function readFunc(e) {
    if (e.target.checked === false) {
        e.target.closest('.book-card').classList.add('not-read');
    } else {
        e.target.closest('.book-card').classList.remove('not-read');
    }
}// add class to the card itself, not to the button!
