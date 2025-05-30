document.addEventListener("DOMContentLoaded", function () {
    var bookName = sessionStorage.getItem("bookName");
    var bookImageSrc = sessionStorage.getItem("bookImageSrc");
    var bookAuthor = sessionStorage.getItem("bookAuthor");
    var bookId = sessionStorage.getItem("bookId");
    var bookCategory = sessionStorage.getItem("bookCategory");
    //Getting elements by id
    var bookNameElement = document.getElementById("book-n");
    var bookImageElement = document.getElementById("book-img");
    var bookAuthorElement = document.getElementById("book-author");
    var bookIdElement = document.getElementById("book-id");
    var bookCategoryElement = document.getElementById("book-category");
    if (bookName && bookAuthor && bookImageSrc && bookId && bookCategory) {
        bookNameElement.textContent = bookName;
        bookAuthorElement.textContent = bookAuthor;
        bookIdElement.textContent = bookId;
        bookCategoryElement.textContent = bookCategory;
        bookImageElement.src = bookImageSrc;
    }
    else {
        bookNameElement.textContent = "Book details not found.";
    }
});