function insert(num) {
    var numero = document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML = numero + num;
}

function calcular() {
    var resultado = document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML = eval(resultado);
}

function limpar() {
    document.getElementById("visor").innerHTML = "";
}

function back() {
    var visor = document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML = visor.substring(0, visor.length -1);
}

function raiz() {
    var num = document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML = Math.sqrt(num);
}



/*
function porcent() {
    var num = document.getElementById("visor").value;
    var r = num / 100;
    var num = document.getElementById("visor").value;
    var num = r / num;
}
*/

/*
function porcent() {
    var num = document.getElementById("visor").value;
    var r = num / 100;
    var n = r * num;
    var num = getElementById("visor").value;
}
*/