const btnCor = document.getElementById("btnCor");

btnCor.addEventListener("click", function () {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        btnCor.textContent = "Modo Claro";
    }
});
