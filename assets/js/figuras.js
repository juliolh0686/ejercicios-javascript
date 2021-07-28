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
    const input = document.getElementById("side-square");
    const value = input.value;

  
    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);

    if(isNaN(perimetro)){
        perimetro=0;
    }

    if(isNaN(area)){
        perimetro=0;
    }

    document.getElementById("res-square").innerHTML = "Perimeter: "+perimetro + " m\nArea: "+area+" m2";
  }

  //Triangulo

  function calcularTriangulo() {
    const lado01 = parseInt(document.getElementById("side1-triangle").value);
    const lado02 = parseInt(document.getElementById("side2-triangle").value);
    const base = parseInt(document.getElementById("base-triangle").value);
    const altura = parseInt(document.getElementById("height-triangle").value);

    let resperimetroTriangulo = perimetroTriangulo(lado01,lado02,base);
    let areatriangulo = areaTriangulo(base,altura);
    let alturatriangulo = alturaTriangulo(lado01,lado02,base);

    if(isNaN(resperimetroTriangulo)){
        resperimetroTriangulo=0;
    }

    if(isNaN(areatriangulo)){
        areatriangulo=0;
    }

    if(isNaN(alturatriangulo)){
        alturatriangulo=0;
    }

    document.getElementById("res-triangle").innerHTML = "Perimeter : "+resperimetroTriangulo+" m\nArea : "+areatriangulo+" m2\nHeight : "+alturatriangulo.toFixed(4)+" m";
  }
  
  //Circulo

  function calcularcirculo() {
    const radio = parseInt(document.getElementById("radio-circle").value);

    let resdiametrocirculo = diametroCirculo(radio);
    let resperimetrocirculo = perimetroCirculo(radio);
    let areacirculo = areaCirculo(radio);

    if(isNaN(resdiametrocirculo)){
        resdiametrocirculo=0;
    }

    if(isNaN(resperimetrocirculo)){
        resperimetrocirculo=0;
    }

    if(isNaN(areacirculo)){
        areacirculo=0;
    }

    document.getElementById("res-circle").innerHTML = "Diameter: "+resdiametrocirculo+"\nPerimeter : "+resperimetrocirculo.toFixed(4)+"\nArea : "+areacirculo.toFixed(4);
  }
  