let links = document.querySelector(".nav__links"),
    search = document.querySelector(".nav__search"),
    searchBtn = document.querySelector(".search-button"),
    searchClose = document.querySelector(".nav__search__close");


    searchBtn.style.cursor = "pointer";
    searchBtn.addEventListener('click', function(){
        links.style.opacity = "0%";
        search.style.display = "flex";
        setTimeout(() => {
            search.style.opacity = "100%";
        }, 300);
    });
    searchClose.addEventListener("click", function(){
        links.style.opacity = "100%";
        search.style.opacity = "0%";
        setTimeout(() => {
            search.style.display = "none";
        }, 300);
    });
