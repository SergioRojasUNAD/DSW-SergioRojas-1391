function ProcesarRespuesta() {
    let total = 3
    let puntos = 0;

    let MyForm = document.forms["formulario"];
    let RespuestasCorrectas = ["c", "a", "b"];

    for(let i =1; i<= total; i++){
        if(MyForm["r"+i].value == null ||
        MyForm["r"+i].value == ''){
            alert('Responda todas las preguntas');
            return false;
        }
        else {
            if (MyForm["r"+i].value === RespuestasCorrectas[i-1])
            puntos++;
        }
    }
    let resultado = document.getElementById('resultado')
    resultado.innerHTML='Obtuviste '+puntos+' puntos de '+total+' posibles';
    return false
}