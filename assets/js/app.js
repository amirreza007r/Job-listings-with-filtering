const filterBox = document.querySelector(".filter-box");

filterBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn")) {
        e.target.parentElement.remove();
    }
});
