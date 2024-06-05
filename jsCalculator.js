
function insert(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var result = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = result.substring(0,result.length -1);
}

function calcular(){
    var ResultCalculo = document.getElementById('resultado').innerHTML;
    if (ResultCalculo){
        document.getElementById('resultado').innerHTML = eval(ResultCalculo);
    } else {
        document.getElementById('resultado').innerHTML = "Não há calculos";
    }

}