


//shows the modal <dialog>
const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("#showDialog");
    showBtn.addEventListener("click", () => {
    dialog.showModal();
});

//addBook btn
const confirmBtn = document.querySelector("#confirmBtn");
confirmBtn.addEventListener("click", (event) => {
    const form = document.querySelector("form");

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
    return [this.title, 
        this.author, 
        this.pages, 
        this.read];
}

Book.prototype.readChange = function() {
    this.read = this.read === "No" ? "Yes" : "No";
    return this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book (title, author, pages, read)
    myLibrary.push(newBook);
    addBookViewer(newBook);
}

function addBookViewer(newBook){
    const view = document.createElement("div");
    view.classList.add("view")
    const bookInfo = document.createElement("p");
    bookInfo.textContent = `Title of the Book: ${newBook.title} \n Author Name: ${newBook.author} \n No of Pages: ${newBook.pages} \n Have Read: ${newBook.read}`;
    view.appendChild(bookInfo);

    let readToggleBtn = document.createElement("button");
    readToggleBtn.classList.add("readToggleBtn");
    readToggleBtn.textContent = "Read or Not";
    readToggleBtn.addEventListener("click", () => {
        newBook.readChange();
        bookInfo.textContent = `Title of the Book: ${newBook.title} \n Author Name: ${newBook.author} \n No of Pages: ${newBook.pages} \n Have Read: ${newBook.read}`;
    });
    view.appendChild(readToggleBtn);
        

        let dltBtn = document.createElement("button");
        dltBtn.classList.add("dltBtn");
        dltBtn.textContent = "Delete this Book";
        dltBtn.addEventListener("click", () => {
            const index = myLibrary.indexOf(newBook);
            if(index > -1) {
                myLibrary.splice(index, 1);
            }
            view.remove();
        })
        view.appendChild(dltBtn);


        let outputBox = document.querySelector("output");
        outputBox.appendChild(view);
}

// function updateBookView(view, newBook){
//     view.textContent = `Title of the Book: ${newBook.title} \n
//     Author Name: ${newBook.author} \n No of Pages: ${newBook.pages} \n Have Read: ${newBook.read}`
// }

// addBookToLibrary("Hobbit", "J.R.R TOLKEIN", 669, true);
// addBookToLibrary("The Odyssey", "Homer", 971, false);

// console.log(myLibrary);

// myLibrary.forEach((book) => {
//     console.log(book.info());
// })

// console.table(myLibrary);





