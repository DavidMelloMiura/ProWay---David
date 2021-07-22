let resultado = document.getElementById("visor");
        
let calculo = {
    //n1 :0,
    //n2 :0,
    valor: null,
    funcaoCalcular :null
};

// Add evento para iniciar quando a janela carregar
window.addEventListener("load", function(){
    atribuirEventos();
})

//Atribuir eventos para os botões - Pode usar loop para ler os numeros
function atribuirEventos(){
    document.getElementById("0").addEventListener("click", inserirNumero);
    document.getElementById("1").addEventListener("click", inserirNumero);
    document.getElementById("2").addEventListener("click", inserirNumero);
    document.getElementById("3").addEventListener("click", inserirNumero);
    document.getElementById("4").addEventListener("click", inserirNumero);
    document.getElementById("5").addEventListener("click", inserirNumero);
    document.getElementById("6").addEventListener("click", inserirNumero);
    document.getElementById("7").addEventListener("click", inserirNumero);
    document.getElementById("8").addEventListener("click", inserirNumero);
    document.getElementById("9").addEventListener("click", inserirNumero);

    document.getElementById("limpar").addEventListener("click", limpar);

    document.getElementById("ponto").addEventListener("click", inserirPonto);

    document.getElementById("soma").addEventListener("click", operador);
    document.getElementById("sub").addEventListener("click", operador);
    document.getElementById("mult").addEventListener("click", operador);
    document.getElementById("div").addEventListener("click", operador);

    document.getElementById("igual").addEventListener("click", clicarResultado);
}

//Insere numero no visor

function inserirNumero(){
      if(isNaN(visor.value)){
        visor.value = event.target.textContent;
      }else{
        if(visor.value == 0){
            visor.value = event.target.textContent;
        }else{
            visor.value += event.target.textContent;
        }
    }
    console.log("Botão clicado"); //Apenas para teste
    
}   

function soma(n1, n2){
    return n1 + n2;
}

function subtrai (n1, n2){
    return n1 - n2;
}

function multiplica (n1, n2){
     return n1 * n2;
}

function divide (n1, n2){
    if (n2 == 0){
        return "Erro ao dividir por zero"
    } else {
    return n1 / n2;
    }
}

function limpar (){
    visor.value = "";

    //calculo.n1 = 0;
    //calculo.n2 = 0;
    calculo.valor = null,
    calculo.funcaoCalcular = null;
}

function inserirPonto(){
    if(visor.value === "" || isNaN(visor.value)){
        visor.value = "0."; //Para não ter que digitar 0 - Digita .5 por exemplo
    } else if (!visor.value.includes(".")){ // ! Se Não inclui ponto
        visor.value = visor.value + ".";

    }
}

function operador(){
    function clicarOperador(){
        if(!isNaN(visor.value)){
            if(calculo.valor == null){
                calculo.valor = Number(visor.value);
                //add valor salvo a versão numerica das 2 linhas acima 
            }else {
                if(calculo.funcaoCalcular != null){
                    calculo.valor = calculo.funcaoCalcular(calculo.valor, Number(visor.value));
                }
            }
        
        }

        let operador = event.target.textContent;
        atribuirOper(operador);
        visor.value = operador;
        

    }

/*
    if(!isNaN(visor.value)){ //Se o que tiver no visor for Numero
        calculo.n1 = Number(visor.value);
    }
    let operador = event.target.textContent;
             //no evento.Quem disparou(botoes).Pega texto conteudo no HTML
    //e colocar na variavel operador
    atribuirOper(operador); //Atribui a operador que foi clicado (atribui essa operação no atribuirOper abaixo e faz a tratativa SE que depois chama a function, soma, subtrai etc)
    visor.value = operador; //pega resultado e faz que seja = ao operador
}
*/

//Atribui tipo de operação a realizar,uxando da função escolhida
function atribuirOper(){
    if (operador == "+"){
        calculo.funcaoCalcular = soma;
    }else if (operador == "-"){
        calculo.funcaoCalcular = subtrai;
    }else if (operador == "*"){
        calculo.funcaoCalcular = multiplica;
    }else if (operador == "/"){
        calculo.funcaoCalcular = divide;
    }   

}

function clicarResultado(){
    if(!isNaN(visor.value) && calculo.funcaoCalcular != null){
// Não fazer calculo se não for numero && a função deve estar preenchida - Algum operador
    let resultado = calculo.funcaoCalcular(calculo.valor, Number(visor.value)); // resposta na var
    
    visor.value = resultado;
    calculo.valor = resultado; //a pessoa pode querer continuar a calcular depois com o resultado
    
    calculo.funcaoCalcular = null; // Evita que de erro com operador
    }

}
}
