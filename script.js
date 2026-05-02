const headers = document.querySelectorAll(".header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;

        content.classList.toggle("open");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});