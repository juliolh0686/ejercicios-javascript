//Código del cuadrado---------------

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

//Código del triangulo------------------

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base,altura){
    return (base*altura) / 2;
}

function alturaTriangulo(lado1,lado2,base){
    if(lado1 === lado2 && lado1 != base){
        return Math.sqrt(Math.pow(lado1,2)-Math.pow(base/2,2));
    }else{
        return "No Corresponde a un Triangulo Isóseles";
    }
}


//Código del Circulo----------------

function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;

//Perimetro
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}


// Aquí interactuamos con el HTML
//Cuadrado
function calcularCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);

    document.getElementById("res-perimetro").innerHTML = "Perimeter of the square: "+perimetro;
    document.getElementById("res-area").innerHTML = "Square area: "+area;

  }

  //Triangulo

  function calcularTriangulo() {
    const lado01 = parseInt(document.getElementById("lado01").value);
    const lado02 = parseInt(document.getElementById("lado02").value);
    const base = parseInt(document.getElementById("base").value);
    const altura = parseInt(document.getElementById("altura").value);

    const resperimetroTriangulo = perimetroTriangulo(lado01,lado02,base);
    const areatriangulo = areaTriangulo(base,altura);
    const alturatriangulo = alturaTriangulo(lado01,lado02,base);

    document.getElementById("res-perimetro-triangulo").innerHTML = "Perimeter of the triangle: "+resperimetroTriangulo;
    document.getElementById("res-area-triangulo").innerHTML = "Triangle area: "+areatriangulo;
    document.getElementById("res-altura-triangulo").innerHTML = alturatriangulo;
  }
  
  //Circulo

  function calcularcirculo() {
    const radio = parseInt(document.getElementById("radio").value);

    const resdiametrocirculo = diametroCirculo(radio);
    const resperimetrocirculo = perimetroCirculo(radio);
    const areacirculo = areaCirculo(radio);

    document.getElementById("res-diametro-circulo").innerHTML = "Circle diameter: "+resdiametrocirculo;
    document.getElementById("res-perimetro-circulo").innerHTML = "Circle perimeter: "+resperimetrocirculo;
    document.getElementById("res-area-circulo").innerHTML = "Circle area: "+areacirculo;
  }
  