function somar(){

    let numero01 = document.getElementById("num01").value;
    let numero02 = document.getElementById("num02").value;

    numero01 = parseInt(numero01)
    numero02 = parseInt(numero02)

    if ((numero01 > 2 && numero01 < 10) && (numero02 > 2 && numero01 < 10)){
        let resultado = numero01+numero02
        document.getElementById("resultado").innerHTML = resultado
    } else {
       alert("Por favor informe um valor maior que 2 e menor que 10")
    }

}