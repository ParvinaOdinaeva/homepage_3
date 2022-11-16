{ // I wariant: przycisk zmieniający zawartość (Pokaż:/Ukryj:) w zalezności od stanu = if...else
    let showHideButton = document.querySelector(".js-showHide");
    let mention = document.querySelector(".js-mention");
    let word = document.querySelector(".js-word");

    showHideButton.addEventListener("click", () => {
        mention.classList.toggle("hide");

        if (mention.classList.contains("hide")) {
            word.innerText = "Pokaż:";
        } else {
            word.innerText = "Ukryj:"
        }
});
}

{ // II wariant: przycisk zmieniający zawartość (Pokaż:/Ukryj:) w zalezności od stanu = ternary operator
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
