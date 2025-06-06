const btnEnviarQuiz = document.getElementById('btnEnviarQuiz')
const resultadoQuiz = document.getElementById('resultado-quiz')

btnEnviarQuiz.addEventListener('click', function(event) {
  console.log("TESTE")
  event.preventDefault();
  let quiz1 = document.querySelector('input[name="q1"]:checked')?.value || "";
  let quiz2 = document.querySelector('input[name="q2"]:checked')?.value || "";
  let quiz3 = document.querySelector('input[name="q3"]:checked')?.value || "";
  let quiz4 = document.querySelector('input[name="q4"]:checked')?.value || "";
  let quiz5 = document.querySelector('input[name="q5"]:checked')?.value || "";
  let quiz6 = document.querySelector('input[name="q6"]:checked')?.value || "";
  let quiz7 = document.querySelector('input[name="q7"]:checked')?.value || "";
  let quiz8 = document.querySelector('input[name="q8"]:checked')?.value || "";
  let quiz9 = document.querySelector('input[name="q9"]:checked')?.value || "";
  let quiz10 = document.querySelector('input[name="q10"]:checked')?.value || "";

  let contador = 0;

  if (
    quiz1 === "" || quiz2 === "" || quiz3 === "" || quiz4 === "" || quiz5 === "" ||
    quiz6 === "" || quiz7 === "" || quiz8 === "" || quiz9 === "" || quiz10 === ""
  ) {
    resultadoQuiz.innerHTML = `<p>Preencha todos os campos!</p>`;
    return;
  }

  if (quiz1 === "b") contador++;
  if (quiz2 === "c") contador++;
  if (quiz3 === "a") contador++;
  if (quiz4 === "b") contador++;
  if (quiz5 === "a") contador++;
  if (quiz6 === "b") contador++;
  if (quiz7 === "a") contador++;
  if (quiz8 === "b") contador++;
  if (quiz9 === "a") contador++;
  if (quiz10 === "a") contador++;

  resultadoQuiz.innerHTML = `<p>Respostas Certas ${contador}</p>`;
});