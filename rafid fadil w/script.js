window.addEventListener("load", function () {
    const loader = document.querySelector(".loader_bg");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "0.5s";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }, 500);
    }
});

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "none";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const cards = document.querySelectorAll(
    ".for_box, .service-box, .product-box"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

    observer.observe(card);
});

const readMore = document.querySelector(".read-more");

if (readMore) {
    readMore.addEventListener("click", function () {
        alert("Terima kasih telah mengunjungi website kami!");
    });
}

const quoteButton = document.querySelector(".yellow-box a");

if (quoteButton) {
    quoteButton.addEventListener("click", function (e) {
        e.preventDefault();

        alert("Permintaan quote berhasil dikirim!");
    });
}