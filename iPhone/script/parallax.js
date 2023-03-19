let iphone13pro = document.getElementById("iphone13pro");
let iphone13 = document.getElementById("iphone13");
let watch = document.getElementById("watch");
let score = document.getElementById("score");
let firstPromo = document.querySelector(".promo-wrapper_first");
let secondPromo = document.querySelector(".promo-wrapper_second");

iphone13pro.style.backgroundPosition = "50% 0%";
iphone13.style.backgroundPosition = "50% -100%";
iphone13.style.backgroundRepeat = "no-repeat";


window.addEventListener("scroll", function(){

    score.textContent = scrollY;

    iphone13pro.style.backgroundPosition = "50%" + (this.pageYOffset/2) + "%";
    if(pageYOffset > 200){
        iphone13pro.style.backgroundPosition = "50% 100%";
    }

    iphone13.style.backgroundPosition = "50%" + (-100 + (this.pageYOffset/4)) + "%";
    if(pageYOffset > 800){
        iphone13.style.backgroundPosition = "50% 100%";
    }
    if(pageYOffset < 1000){
        watch.style.backgroundPosition = "-100% 50%";
        }
    if(pageYOffset > 1000){
        watch.style.backgroundPosition = "50% 50%";
        }
    if(scrollY > 1500){
        firstPromo.style.opacity = "100%";
    }
    if(scrollY > 2300){
        secondPromo.style.opacity = "100%";
    }






    
    }
)

