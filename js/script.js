{   
    let buttonContenerChangeColor = document.querySelector(".buttonContenerChangeColor");
    let mainContener = document.querySelector(".mainContener");
    let background = document.querySelector(".js-background");

    buttonContenerChangeColor.addEventListener("click", () => {
        mainContener.classList.toggle("mainContenerColorToggle");
        background.innerText = mainContener.classList.contains("mainContenerColorToggle") ? "ciemne" : "jasne";
    });
}


{   
    let showHideButton = document.querySelector(".js-showHide"); 
    let mention = document.querySelector(".js-mention");
    let word = document.querySelector(".js-word");
} 

{  
    showHideButton.addEventListener("click", () => {
        mention.classList.toggle("hide");
        word.innerText = mention.classList.contains("hide") ? "Pokaż:" : "Ukryj:";
});
}

