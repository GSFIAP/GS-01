const btnCor = document.getElementById("btnCorPreto");
const html = document.querySelector("html");
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputEndereco = document.getElementById('endereco');
const btnEnviar = document.getElementById('btnEnviar');
const mensagemErro = document.getElementById('mensagemErro');
const redesSociais = document.getElementById('logo-redes-social');
const carrossel = document.getElementById('carrossel');
const anterior = document.getElementById('anterior');
const proximo = document.getElementById('proximo');
let indice = 0;

btnCorPreto.addEventListener("click", function () {
    html.classList.remove("modo-verde", "modo-azul") 
    html.classList.toggle("modo-preto");
        redesSociais.innerHTML = `
    <p>Venha conferir nossas redes sociais para mais atualizações!</p>
       <div class="icones-redes">
            <a href="https://api.whatsapp.com/send/?phone=5511976769012&text&type=phone_number&app_absent=0"><img  alt="Whatsapp" src="/src/assets/imgs/whatsapp_modo_preto.png"></a>
            <a href="https://www.instagram.com/"><img alt="Instagram" src="/src/assets/imgs/instagram_modo_preto.png"></a>
            <a href="https://www.linkedin.com/"><img alt="LinkedIn" src="/src/assets/imgs/linkedin_modo_preto.png"></a>
        </div>
    `
    
});

btnCorVerde.addEventListener("click", function () {
    html.classList.remove("modo-preto", "modo-azul")
    html.classList.toggle("modo-verde");
    redesSociais.innerHTML = `
    <p>Venha conferir nossas redes sociais para mais atualizações!</p>
       <div class="icones-redes">
            <a href="https://api.whatsapp.com/send/?phone=5511976769012&text&type=phone_number&app_absent=0"><img  alt="Whatsapp" src="/src/assets/imgs/whatsapp_modo_verde.png"></a>
            <a href="https://www.instagram.com/"><img alt="Instagram" src="/src/assets/imgs/instagram_modo_verde.png"></a>
            <a href="https://www.linkedin.com/"><img alt="LinkedIn" src="/src/assets/imgs/linkedin_modo_verde.png"></a>
        </div>
    `
});

btnCorAzul.addEventListener("click", function () {
    html.classList.remove("modo-verde", "modo-preto")
    html.classList.toggle("modo-azul");
    redesSociais.innerHTML = `
        <p>Venha conferir nossas redes sociais para mais atualizações!</p>
       <div class="icones-redes">
            <a href="https://api.whatsapp.com/send/?phone=5511976769012&text&type=phone_number&app_absent=0"><img  alt="Whatsapp" src="/src/assets/imgs/whatsapp_modo_azul.png"></a>
            <a href="https://www.instagram.com/"><img alt="Instagram" src="/src/assets/imgs/instagram_modo_azul.png"></a>
            <a href="https://www.linkedin.com/"><img alt="LinkedIn" src="/src/assets/imgs/linkedin_modo_azul.png"></a>
        </div>
    `

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

function atualizarCarrossel() {
  const larguraImagem = carrossel.clientWidth;
  carrossel.style.transform = `translateX(-${indice * larguraImagem}px)`;
}

proximo.addEventListener('click', () => {
  if (indice < carrossel.children.length - 1) {
    indice++;
  } else {
    indice = 0;
  }
  atualizarCarrossel();
});

anterior.addEventListener('click', () => {
  if (indice > 0) {
    indice--;
  } else {
    indice = carrossel.children.length - 1;
  }
  atualizarCarrossel();
});

window.addEventListener('resize', atualizarCarrossel);


