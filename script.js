//const { isValid } = require("rsuite/esm/utils/dateUtils");



//shows the modal <dialog>
const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("#showDialog");
    showBtn.addEventListener("click", () => {
    dialog.showModal();
    // initializeValidation();
});

//addBook btn
const confirmBtn = document.querySelector("#confirmBtn");
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const nameValid = isValidName();
    const authorValid = isValidAuthor();
    const pagesValid = isValidPages();

    setNameClass(nameValid);
    updateBookError(nameValid);

    setAuthorClass(authorValid);
    updateAuthorError(authorValid);

    setPagesClass(pagesValid);
    updatePagesError(pagesValid);

    if (nameValid && authorValid && pagesValid) {
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const read = document.getElementById("read").checked ? "Yes" : "No";

        addBookToLibrary(title, author, pages, read);
        dialog.close();
        form.reset();
    }

    // const form = document.querySelector("form");

    // if(form.checkValidity()) {
    //     event.preventDefault();
    //     const title = document.getElementById("title").value;
    //     const author = document.getElementById("author").value;
    //     const pages = document.getElementById("pages").value;
    //     const read = document.getElementById("read").checked ? "Yes" : "No";
    //     addBookToLibrary(title, author, pages, read);

    //     dialog.close();
    //     document.querySelector("form").reset();
    // }
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

    const readToggleBtn = document.createElement("button");
    readToggleBtn.textContent = "Read or Not";
    readToggleBtn.addEventListener("click", () => {
        newBook.readChange();
        bookInfo.textContent = `Title of the Book: ${newBook.title} \n Author Name: ${newBook.author} \n No of Pages: ${newBook.pages} \n Have Read: ${newBook.read}`;
    })
    view.appendChild(readToggleBtn);

    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";
    dltBtn.addEventListener("click", () => {
        const index = myLibrary.indexOf(newBook);
        if (index > -1) {
            myLibrary.splice(index, 1);
        }
        view.remove();
    })
    view.appendChild(dltBtn);

    const outputBox = document.querySelector("output");
    outputBox.appendChild(view);

    // let readToggleBtn = document.createElement("button");
    // readToggleBtn.classList.add("readToggleBtn");
    // readToggleBtn.textContent = "Read or Not";
    // readToggleBtn.addEventListener("click", () => {
    //     newBook.readChange();
    //     bookInfo.textContent = `Title of the Book: ${newBook.title} \n Author Name: ${newBook.author} \n No of Pages: ${newBook.pages} \n Have Read: ${newBook.read}`;
    // });
    // view.appendChild(readToggleBtn);
        

        // let dltBtn = document.createElement("button");
        // dltBtn.classList.add("dltBtn");
        // dltBtn.textContent = "Delete this Book";
        // dltBtn.addEventListener("click", () => {
        //     const index = myLibrary.indexOf(newBook);
        //     if(index > -1) {
        //         myLibrary.splice(index, 1);
        //     }
        //     view.remove();
        // })
        // view.appendChild(dltBtn);


        // let outputBox = document.querySelector("output");
        // outputBox.appendChild(view);
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


//------------VALIDATIONS------------------//

const form = document.querySelector("form");
const bookName = document.getElementById("title");
const authorName = document.getElementById("author");
const pagesNo = document.getElementById("pages");
const bookError = document.getElementById("name-error");
const authorError = document.getElementById("author-error");
const pagesError = document.getElementById("pages-error");

const isValidName = () => {
    const nameValidity = bookName.value.length !== 0;
    return nameValidity;
}

const isValidAuthor = () => {
    const authorValidity = authorName.value.length !== 0;
    return authorValidity;
}

const isValidPages = () => {
    const pagesValidity = pagesNo.value.length !== 0;
    return pagesValidity;
}

const setNameClass = (isValid) => {
    bookName.className = isValid ? "valid" : "invalid";
}

const setAuthorClass = (isValid) => {
    authorName.className = isValid ? "valid" : "invalid";
}

const setPagesClass = (isValid) => {
    pagesNo.className = isValid ? "valid" : "invalid";
}

const updateBookError = (isValidName) => {
    if (isValidName) {
        bookError.textContent = "";
        bookError.removeAttribute("class");
    }
    else {
        bookError.textContent = "Book Name Required";
        bookError.setAttribute("class", "active");
    }
}

const updateAuthorError = (isValidAuthor) => {
    if (isValidAuthor) {
        authorError.textContent = "";
        authorError.removeAttribute("class");
    }
    else {
        authorError.textContent = "Author Name Required";
        authorError.setAttribute("class", "active")
    }
}

const updatePagesError = (isValidPages) => {
    if (isValidPages) {
        pagesError.textContent = "";
        pagesError.removeAttribute("class");
    }
    else {
        pagesError.textContent = "No of Pages Read Required";
        pagesError.setAttribute("class", "active");
    }
}

const initializeValidation = () => {
    const nameInput = isValidName();
    setNameClass(nameInput);
    
    const authorInput = isValidAuthor();
    setAuthorClass(authorInput);

    const pagesInput = isValidPages();
    setPagesClass(pagesInput);
}

const handleInput = () => {
    const nameInput = isValidName();
    setNameClass(nameInput);
    updateBookError(nameInput);

    const authorInput = isValidAuthor();
    setAuthorClass(authorInput);
    updateAuthorError(authorInput);

    const pagesInput = isValidPages();
    setPagesClass(pagesInput);
    updatePagesError(pagesInput);
}

// const handleSubmit = (event) => {
//     event.preventDefault();

//     setNameClass(nameInput);
//     updateBookError(nameInput);
    
//     setAuthorClass(authorInput);
//     updateAuthorError(authorInput);
    
//     setPagesClass(pagesInput);
//     updatePagesError(pagesInput);

// }

// showBtn.addEventListener("click", () => {
//     initializeValidation();
// })

function handleBlur(event) {
    const field = event.target;

    if (field === bookName) {
        const valid = isValidName();
        setNameClass(valid);
        updateBookError(valid);
    }
    else if (field === authorName) {
        const valid = isValidAuthor();
        setAuthorClass(valid);
        updateAuthorError(valid);
    }
    else if (field === pagesNo) {
        const valid = isValidPages();
        setPagesClass(valid);
        updatePagesError(valid);
    }
}

bookName.addEventListener("blur", handleInput);
authorName.addEventListener("blur", handleInput);
pagesNo.addEventListener("blur", handleInput);

// form.addEventListener("submit", handleSubmit)





