document.addEventListener("DOMContentLoaded", function () {
    var books = document.querySelectorAll(".book-page");
    books.forEach(function (book) {
        book.addEventListener("click", function () {
            var bookName = this.getAttribute("data-name");
            var bookAuthor = this.getAttribute("data-author");
            var bookId = this.getAttribute("data-id");
            var bookCategory = this.getAttribute("data-category");
            var bookImageSrc = this.querySelector("img").getAttribute("src");
            sessionStorage.setItem("bookName", bookName);
            sessionStorage.setItem("bookImageSrc", bookImageSrc);
            sessionStorage.setItem("bookAuthor", bookAuthor);
            sessionStorage.setItem("bookId", bookId);
            sessionStorage.setItem("bookCategory", bookCategory);
            window.location.href = "book-page.html";
        });
    });
});

var userName = sessionStorage.getItem("Name");
var userNameElement = document.getElementById("userName");
if (userName) {
    userNameElement.textContent = userName;
}