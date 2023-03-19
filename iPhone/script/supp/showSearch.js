let searchInput = document.querySelector(".sup-search__input"),
    fastLinks = document.querySelector(".sup-search__fast-links"),
    body = document.querySelector("body"),
    viewLinks = 0;

    fastLinks.style.height = "0px";
    fastLinks.style.padding = "0px";
    fastLinks.style.border = "none";

    body.addEventListener("click", function(){
        viewLinks = 0;
        fastLinks.style.height = "0px";
        fastLinks.style.padding = "0px";
        setTimeout(() => {
            if(viewLinks == 0){
                fastLinks.style.border = "none";
            }
        }, 400);
    });


    searchInput.addEventListener("click", function(){
        setTimeout(() => {
            fastLinks.style.height = "250px";
            fastLinks.style.padding = "20px 0px";
            fastLinks.style.border = "1px solid #bbb";
            viewLinks = 1;
        }, 10);
    }); 