const btnCor = document.getElementById("btnCorPreto");
const html = document.querySelector("html");
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputEndereco = document.getElementById('endereco');
const btnEnviar = document.getElementById('btnEnviar');
const mensagemErro = document.getElementById('mensagemErro')
const redesSociais = document.getElementById('redes-sociais')

btnCorPreto.addEventListener("click", function () {
    html.classList.remove("modo-verde", "modo-azul") 
    html.classList.toggle("modo-preto");
    
});

btnCorVerde.addEventListener("click", function () {
    html.classList.remove("modo-preto", "modo-azul")
    html.classList.toggle("modo-verde");
});

btnCorAzul.addEventListener("click", function () {
    html.classList.remove("modo-verde", "modo-preto")
    html.classList.toggle("modo-azul");
    // redesSociais.innerHTML = `
    // <img id="whatsapp-modo-azul" src="./src/assets/imgs/whatsapp_modo_azul.png">
    // `
});


btnEnviar.addEventListener("click", function (event) {
    event.preventDefault()

    let nome = inputNome.value
    let email = inputEmail.value
    let endereco = inputEndereco.value

    if (nome === "" || email === "" ||  endereco === "") {
        mensagemErro.textContent= "Preencha os Campos Vazios!"
        return
        }
    else {
        open(`https://api.whatsapp.com/send?phone=5511976769012&text=Olá%20meu%20nome%20é%20${nome},%20gostaria%20de%20implantar%20o%20AquaTrack%20no%20seguinte%20endereço:%20${endereco}.`)
        mensagemErro.textContent = "Dados Enviados com sucesso!"
    }
    });

const menuHamburguer = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu');

menuHamburguer.addEventListener('click', () => {
  menu.classList.toggle('show');
});



