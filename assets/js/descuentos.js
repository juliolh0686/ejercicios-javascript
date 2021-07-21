// const precioOriginal = 120;
// const descuento = 18;

const coupons = [
    "SECRETO",
    "MADMAX",
    "JAVASCRIPT",
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const priceValue = inputPrice.value;
    const discountvalue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountvalue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText="El precio con descuento es: $" + precioConDescuento;

}

function onClickButtonPriceCoupon() {
    const inputPrice = document.getElementById("InputPriceCoupon");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento;
  
    switch(couponValue) {
      case "SECRETO":
        descuento = 15;
      break;
      case "MADMAX":
        descuento = 30;
      break;
      case "JAVASCRIPT":
        descuento = 25;
      break;
    }
  
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultPCoupon");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });