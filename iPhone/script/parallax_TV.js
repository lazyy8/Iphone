let TV = document.getElementById("TV");
let house = document.getElementById("house");
let score = document.getElementById("score");
let firstPromo = document.querySelector(".promo-wrapper_first_TV");
let secondPromo = document.querySelector(".promo-wrapper_second_TV");
let promo_little1 = document.querySelector(".promo_little1");
let promo_little2 = document.querySelector(".promo_little2");
let promo_little3 = document.querySelector(".promo_little3");
let promo_little4 = document.querySelector(".promo_little4");
TV.style.backgroundPosition = "50% 0%";
house.style.backgroundPosition = "50% -100%";
house.style.backgroundRepeat = "no-repeat";


window.addEventListener("scroll", function(){

    score.textContent = scrollY;

    TV.style.backgroundPosition = "50%" + (this.pageYOffset/2) + "%";
    if(pageYOffset > 1000){
        TV.style.backgroundPosition = "50% 100%";
    }

    house.style.backgroundPosition = "50%" + (-100 + (this.pageYOffset/4)) + "%";
    if(pageYOffset > 800){
        house.style.backgroundPosition = "50% 100%";
    }
    if(pageYOffset < 1000){
        tvplus.style.backgroundPosition = "50% -3500%";
        }
    if(pageYOffset > 1000){
        tvplus.style.backgroundPosition = "center" ;
        }
    if(scrollY > 1500){
        firstPromo.style.opacity = "100%";
        firstPromo.style.border = "100px solid white";
        firstPromo.style.margin = "0";
        
    }
    if(scrollY > 2300){
        secondPromo.style.opacity = "100%";
        secondPromo.style.margin = "0";

    }

    if(scrollY > 3200){
        promo_little1.style.margin = "10px -355px 0 50px";
        promo_little1.style.height = "630px";
        promo_little1.style.borderRadius = "50px";
    }
    if(scrollY > 3200){
        promo_little2.style.margin = "700px 0 0 -445px";
        promo_little2.style.height = "630px";
        promo_little2.style.borderRadius = "50px";
    }
    if(scrollY > 3200){
        promo_little3.style.margin = "10px 0px 0 200px";
        promo_little3.style.height = "50%";
        promo_little3.style.borderRadius = "50px";
    }

    if(scrollY > 3200){
        promo_little4.style.margin = "700px 0 0 -800px";
        promo_little4.style.height = "50%";
        promo_little4.style.display = "block";
        promo_little4.style.borderRadius = "50px";
    }

    }
)



