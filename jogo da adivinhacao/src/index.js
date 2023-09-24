const randomNumber = Math.round(Math.random() * 2)
let tentativa = 0
const voltar = window.document.getElementById("voltar")
const tentar = window.document.getElementById("btn")

tentar.addEventListener('click',function handleClick(event) {
    event.preventDefault() // não envie o formulário ou sejam saia do padrão, pois ele está dentro de um form

    let number = document.getElementById("inputNumber").value

    if (parseInt(number) <= 10 && parseInt(number) >=0 ) {
        if (parseInt(number) == randomNumber) {
            document.querySelector(".screen1").classList.add("hide")
            document.querySelector(".screen2").classList.remove("hide")
        }}else{
            window.alert("Digite um numero de 0 a 10")
        }
    tentativa++
    document.querySelector("h2").innerHTML = `Acertou em ${tentativa} tentativas`
})


voltar.addEventListener('click',function voltar(){
    tentativa = 0
    document.querySelector(".screen2").classList.add("hide")
    document.querySelector(".screen1").classList.remove("hide")
    document.getElementById("inputNumber").value = ''
})