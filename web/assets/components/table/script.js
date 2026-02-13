document.querySelectorAll(".row-link").forEach(row => {

    row.addEventListener("click", e => {

        /* se clicou em botão ou ação, não navega */
        if (e.target.closest(".btn-action")) return;

        const url = row.dataset.href;
        if (url) window.location.href = url;
    });

});