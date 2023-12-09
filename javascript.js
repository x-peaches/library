
//define variables

const myLibrary = [];
const bookInput = document.getElementById('bookInput');
const submitBtn = document.getElementById('submitBtn');
const libraryDiv = document.getElementById('libraryDiv');
//constructor

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + status;
    }
};

//event listener
submitBtn.addEventListener('click', addBookToLibrary);

//Add user books to arr

function addBookToLibrary() {
    console.log(bookInput.value);

    myLibrary.push(new Book(bookInput.value));
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


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

console.log(theHobbit.info());

