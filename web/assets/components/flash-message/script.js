function fecharFlashMessage() {
    const modal = document.getElementById("flash-message");
    if (!modal) return;

    // dispara animação de saída
    modal.classList.add("saindo");

    // remove só depois da animação
    setTimeout(() => {
        modal.remove();
    }, 300); // mesmo tempo do CSS
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(fecharFlashMessage, 5000);
});