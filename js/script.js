function spin(){
    const el = document.querySelector(".refresh");
    
    // Força o reset da animação
    el.style.animation = "none";
    el.offsetHeight; // força reflow (necessário para reiniciar a animação)
    
    el.style.animation = "spin 2s";

    // Remove a animação após 2 segundos
    setTimeout(() => {
        el.style.animation = "none";
    }, 2000);
}
