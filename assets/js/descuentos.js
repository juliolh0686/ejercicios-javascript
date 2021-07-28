// const precioOriginal = 120;
// const descuento = 18;

const coupons = [
    "YODA",
    "MANDALORIAN",
    "JEDI",
];

function calcularPrecioConDescuento(precio, descuento,cupon){
    const porcentajePrecioConDescuento = 100 - (parseInt(descuento)+parseInt(cupon));
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("price");
    const inputDiscount = document.getElementById("discount");
    const inputCoupon = document.getElementById("coupon");
    let priceValue = inputPrice.value;
    const discountvalue = inputDiscount.value;
    const couponValue = inputCoupon.value;

    let descuentoCoupon=0;
  
    switch(couponValue) {
      case "YODA":
        descuentoCoupon = 15;
      break;
      case "MANDALORIAN":
        descuentoCoupon = 30;
      break;
      case "JEDI":
        descuentoCoupon = 25;
      break;
    }

    const montoDescuento= (priceValue * discountvalue) / 100;
    const montoDescuentoCoupon= (priceValue * descuentoCoupon) / 100;

    let precioConDescuento = calcularPrecioConDescuento(priceValue,discountvalue,descuentoCoupon);

    
    if(isNaN(priceValue) | priceValue===""){
      priceValue=0;
    }

    if(isNaN(montoDescuento)){
      montoDescuento=0;
    }

    if(isNaN(montoDescuentoCoupon)){
      montoDescuentoCoupon=0;
    }

    if(isNaN(precioConDescuento)){
      precioConDescuento=0;
    }

    document.getElementById("res-precio").innerHTML ="Price : $" + priceValue+"\nDiscount : $"+montoDescuento+"\nCoupon : $"+montoDescuentoCoupon+"\nFinal Price : $"+precioConDescuento;

}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });