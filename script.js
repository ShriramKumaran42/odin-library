const outputBox = document.querySelector("output")


//shows the modal <dialog>
const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("#showDialog");
    showBtn.addEventListener("click", () => {
    dialog.showModal();
});

//addBook btn
const confirmBtn = document.querySelector("#confirmBtn");
confirmBtn.addEventListener("click", (event) => {
    const form = document.querySelector(form);

    if(form.checkValidity()) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const read = document.getElementById("read").checked ? "Yes" : "No";
        addBookToLibrary(title, author, pages, read);

        dialog.close();
        document.querySelector("form").reset();
    }
});

//close
const closeBtn = document.querySelector(".cancel");
closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
    document.querySelector("form").reset();
})


//books

const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return [this.title, this.author, this.pages, this.read];
}



function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book (title, author, pages, read)
    myLibrary.push(newBook);
    addBookViewer(newBook);
}

function addBookViewer(newBook){
    
}

addBookToLibrary("Hobbit", "J.R.R TOLKEIN", 669, true);
addBookToLibrary("The Odyssey", "Homer", 971, false);

console.log(myLibrary);

myLibrary.forEach((book) => {
    console.log(book.info());
})

console.table(myLibrary);





