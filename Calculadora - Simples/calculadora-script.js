function calculo() {
    //document.getElementById("resultado").style.visibility = 'visible';
    
    var num1 = document.getElementById('n1').value
    var num2 = document.getElementById("n2").value
    var res = document.getElementById('resultado').value
    var op = document.getElementById("operador").value

   
    if (op == "somar") {
        res = Number.parseInt(num1) + Number.parseInt(num2);    
    }
    else if (op == "subtrair") {
        var res = parseInt(num1) - parseInt(num2);
    }
    else if (op == "multiplicar") {
        var res = parseInt(num1) * parseInt(num2);
    }
    else if (op == "dividir") {
        var res = parseInt(num1) / parseInt(num2);
    }
    else if (op == "selecionar") {
        var res = "Selecione uma operação"
    }
    else if (op == "potencia") {
        var res = Math.pow(num1, num2);
    }
    else if (op == "raiz") {
        var res = Math.sqrt(num1);
    }
    

    resultado.innerHTML = res;



}