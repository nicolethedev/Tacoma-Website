const scrollToTopBtn = document.getElementById("return-top");

const mediaQuery = window.matchMedia("(min-width: 60.6em)");

function handleScroll() {
    if (mediaQuery.matches) {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

window.addEventListener("scroll", handleScroll);

mediaQuery.addEventListener("change", handleScroll);

function scrollToTop() {
    window.scrollTo({
        top: 10,
        behavior: "smooth"
    });
}