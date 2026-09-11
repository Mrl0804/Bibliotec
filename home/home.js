const menu = document.getElementById("menu"); // Pegando o elemento pelo id

const navMenu = document.querySelector(".navegacao"); //Pegando o elemento de forma genérica - classe = . / id = # 

menu.addEventListener("click", function() {

    if (navMenu.className == "navegacao") {

        navMenu.className = "navegacao ativo";
    }
    else {
        navMenu.className = "navegacao";
    }
})