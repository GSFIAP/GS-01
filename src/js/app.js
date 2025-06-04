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

const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputMensagem = document.getElementById('mensagem');
const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault()

    let nome = inputNome.value
    let email = inputEmail.value
    let mensagem = inputMensagem.value

    if (nome === "" || email === "" ||  mensagem === "") {
        
        alert("TESTE")
        // mensagemErro.textContent = "Preencha os campos vazios!"
        // mensagemErro.style.color = "#ff0000"
        // mensagemErro.classList.add('mensagemvermelha')
        // mensagemErro.setAttribute("src", "link da imagem")
        // mensagemErro.src = "link"
        return

        }
    });
