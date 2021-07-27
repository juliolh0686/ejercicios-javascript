// function calcularMediaAritmetica(lista){

//     const sumaLista = lista.reduce(
//         function(valorAcumulado=0, nuevoElemento){
//             return valorAcumulado + nuevoElemento;
//         }
//     );

//     const promedioLista = sumaLista / lista.length;

//     return promedioLista;

// }


// const lista1 = [
//     100,
//     50,
//     10,
//     400000000,
//     12,
// ];


function calcularMediana(lista){

    lista.sort(function(a,b){return a -b});

    const mitadLista = parseInt(lista.length/2);

    function esPar(numerito){
        if(numerito % 2 === 0 ){
            return true;
        }else{
            return false;
        }
    }

    let mediana;

    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista-1];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);

        mediana = promedioElemento1y2;

    }else {
        mediana = lista[mitadLista];
    }

    document.getElementById("res-media").innerHTML = "Mediana : "+mediana;

}




