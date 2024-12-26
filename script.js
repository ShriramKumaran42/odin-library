const showBtn = document.getElementById("showDialog");
const addDialog = document.getElementById("addDialog");
const outputBox = document.querySelector("output")
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPgs = document.querySelector("#bookPgs");
const finished = document.querySelector("select")
const confirmBtn = document.querySelector("#confirmBtn");

//shows the modal <dialog>
showBtn.addEventListener("click", () => {
    addDialog.showModal();
});

addDialog.addEventListener("close", (e) => {
    outputBox.value = 
    addDialog.returnValue === "default"
    ? "No return value"
    : `ReturnValue: ${favDialog.returnValue}`;
})

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addDialog.closest()    
})



const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book (title, author, pages, read)
    myLibrary.push(newBook);
}

addBookToLibrary("Hobbit", "J.R.R TOLKEIN", 669, true);
addBookToLibrary("The Odyssey", "Homer", 971, false);

console.log(myLibrary);

myLibrary.forEach((book) => {
    console.log(book.info());
})

console.table(myLibrary);





