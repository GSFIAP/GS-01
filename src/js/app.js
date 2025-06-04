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
const inputEndereco = document.getElementById('endereco');
const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault()

    let nome = inputNome.value
    let email = inputEmail.value
    let endereco = inputEndereco.value

    if (nome === "" || email === "" ||  endereco === "") {
        alert("Preencha os Campos Vazios!")
        return
        }
    else {
        open(`https://api.whatsapp.com/send?phone=5511976769012&text=Olá%20meu%20nome%20é%20${nome},%20gostaria%20de%20implantar%20o%20Arduino%20no%20seguinte%20endereço:%20${endereco}.`)
    }
    });
