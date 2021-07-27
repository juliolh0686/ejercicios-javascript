const lista05 = [
    4,9,8,6,5,4,2,
];

//----Promedio Geometrico

function calcularPromedioGeometrico(lista){

    const multiLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado * nuevoElemento;
        }
    );

    const promedioLista = Math.pow(multiLista, 1 / (lista.length))

    document.getElementById("res-averages").innerHTML = "geometric : "+promedioLista;


}

