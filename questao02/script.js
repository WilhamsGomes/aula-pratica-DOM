function toUpperCase(){

    var nome = document.getElementById("name");
    document.getElementById("resultado").innerHTML = nome.value.toUpperCase();

}

function soma(){

    var idade = document.getElementById("idade").value;
    
    idade = parseFloat(idade)

    document.getElementById("calculo").innerHTML = "Daqui a 10 anos você terá: " + (idade+10) + " anos"

}