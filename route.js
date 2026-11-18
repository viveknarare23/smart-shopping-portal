// route.js - SPA navigation: switching pages, back/forward buttons, first page

function navigate(page) {
    document.querySelectorAll(".page").forEach(function(section) {
        section.classList.remove("active");
    });

    document.getElementById(page).classList.add("active");

    history.pushState({ page: page }, "", "#" + page);

    if (page === "cart") {
        showCart();
    }

    window.scrollTo(0, 0);
}

// Browser back / forward buttons
window.addEventListener("popstate", function() {
    let page = location.hash.substring(1) || "home";

    if (document.getElementById(page)) {
        document.querySelectorAll(".page").forEach(function(section) {
            section.classList.remove("active");
        });

        document.getElementById(page).classList.add("active");

        if (page === "cart") {
            showCart();
        }
    }
});

// Menu / button links
document.querySelectorAll(".nav-link").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        let page = link.getAttribute("href").substring(1);
        navigate(page);
    });
});

// Show the page named in the URL when the site first opens
function showFirstPage() {
    let firstPage = location.hash.substring(1) || "home";

    if (document.getElementById(firstPage)) {
        document.querySelectorAll(".page").forEach(function(section) {
            section.classList.remove("active");
        });

        document.getElementById(firstPage).classList.add("active");
    }
}
