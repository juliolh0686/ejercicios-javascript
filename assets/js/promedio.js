let numeros = [
    15,
    12,
    14,
    16,
    18,
];

function recargarLista(){

    let i;

    document.getElementById("numeros_array").innerHTML="<h2 class='cardinfo__title'>Item List:</h2>";

    for(i=0;i<numeros.length;i++){
        document.getElementById("numeros_array").innerHTML = document.getElementById("numeros_array").innerHTML +"<p> Item "+i+" => "+numeros[i]+"</p><br>";
    }
}

recargarLista();


//Agregar Elemento al Array
function addItem(){
    numeros.push(parseInt(document.getElementById("add-item").value));
    recargarLista();
}

function deleteItem(){
    numeros.splice(parseInt(document.getElementById("delete-item").value), 1);
    recargarLista();
}

//----Media

function calcularMediaAritmetica(lista){

    // let sumaLista = 0;

    // for(let i=0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    document.getElementById("res-media").innerHTML = "Promedio : "+promedioLista;

}



//---Mediana

