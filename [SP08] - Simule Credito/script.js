function calcular(){
    document.getElementById("res").style.visibility = "visible"

    var vl = document.getElementById("valor").value
    var res = document.getElementById("res")
    var parcelas = document.getElementById("parcelas").value

    var valorParcela = vl / parcelas

    res.innerHTML = `Valor das Parcelas: ${parcelas}x de R$ ${valorParcela.toFixed(2)}`
  

    let result = document.querySelector("")
    



}

