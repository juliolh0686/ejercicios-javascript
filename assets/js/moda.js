// const lista2 = [
//     1,2,3,3,4,5,6,3,1,1,1,
// ];


function calcularModa(lista){

    const listaCount={};

    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(function(elementoA,elementoB){
        return elementoA[1] - elementoB[1];
    });

    const moda = listaArray[listaArray.length-1]

    document.getElementById("res-media").innerHTML = "Moda : "+moda[0];

}

//--EJEMPLO REDUCIDO
// const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

// function mode(arr){
//     return arr.sort((a,b) =>
//           arr.filter(v => v===a).length
//         - arr.filter(v => v===b).length
//     ).pop();
// }


// console.log(mode(NUMBERS)); //5

