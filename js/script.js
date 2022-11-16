{   // przycisk przełączający tło
    let buttonContenerChangeColor = document.querySelector(".buttonContenerChangeColor");
    let mainContener = document.querySelector(".mainContener");
    let background = document.querySelector(".js-background");

    buttonContenerChangeColor.addEventListener("click", () => {
        mainContener.classList.toggle("mainContenerColorToggle");
        background.innerText = mainContener.classList.contains("mainContenerColorToggle") ? "ciemne" : "jasne";
    });
}


{   // przycisk zmieniający zawartość (Pokaż:/Ukryj:) w zalezności od stanu = ternary
    let showHideButton = document.querySelector(".js-showHide"); // przycisk
    let mention = document.querySelector(".js-mention"); // dodatek
    let word = document.querySelector(".js-word"); // słowo
    
    // klikamy w przycisk, przełączając klasę "hide"
    // jeśli dodatek jest w stanie "hide", widnieje słowo "Pokaż:", w przeciwnym razie "Ukryj:"
    showHideButton.addEventListener("click", () => {
        mention.classList.toggle("hide");
        word.innerText = mention.classList.contains("hide") ? "Pokaż:" : "Ukryj:";
});
}

