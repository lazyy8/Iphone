let message = document.querySelector(".message"),
    placeHolder = document.querySelector(".nav-placeholder"),
    btnMessage = document.querySelector(".btnMessage");

    btnMessage.addEventListener("click", function(){
        message.style.display = "flex";
        placeHolder.style.display = "block";
        setTimeout(() => {
            message.style.display = "none";
        placeHolder.style.display = "none";
        }, 3000);
    }
)
