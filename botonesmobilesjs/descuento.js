document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list-deporte'); // Obtiene la referencia al elemento que contiene las imágenes
    const btnSlideLeft = document.getElementById('btn-slide-left-deport'); // Obtiene la referencia al botón
  
    let scrollAmount = 0; // Cantidad inicial de desplazamiento
    const scrollStep = 200; // Cantidad de desplazamiento por paso (ajusta según tus necesidades)
  
    btnSlideLeft.addEventListener('click', function() {
      scrollAmount += scrollStep; // Aumenta el valor de scrollAmount por la cantidad de desplazamiento
  
      // Aplica la transformación CSS para desplazar horizontalmente las imágenes
      productList.style.transform = `translateX(-${scrollAmount}px)`;
  
      // Restablece la posición de desplazamiento si alcanza el final del contenedor
      if (scrollAmount >= productList.scrollWidth - productList.clientWidth) {
        scrollAmount = 0; // Restablece la cantidad de desplazamiento a 0
        productList.style.transform = 'translateX(0)'; // Restablece la posición de desplazamiento
      }
    });

    const btnlrigth2 = document.getElementById("btnlrigth2");

  let scrollAmountLefts2 = -0; // Cantidad inicial de desplazamiento hacia la izquierda
  const scrollStepLefts2 = -200; // Cantidad de desplazamiento por paso (ajusta según tus necesidades)

  btnlrigth2.addEventListener('click', function() {
    scrollAmountLefts2 -= scrollStepLefts2; // Aumenta el valor de scrollAmountLefts2 por la cantidad de desplazamiento

    // Aplica la transformación CSS para desplazar horizontalmente las imágenes hacia la izquierda
    productList.style.transform = `translateX(${scrollAmountLefts2}px)`;

    // Restablece la posición de desplazamiento si alcanza el inicio del contenedor
    if (scrollAmountLefts2 <= productList.scrollWidth - productList.clientWidth) {
      scrollAmountLefts2 = 0; // Restablece la cantidad de desplazamiento a 0
      productList.style.transform = 'translateX(0)'; // Restablece la posición de desplazamiento
    }
  });

 
  btnSlideLeft.addEventListener('click', function() {
    if(productList.scrollLeft === 0){
      btnlrigth2.style.opacity=1
    }
   setTimeout(() => {
    btnlrigth2.style.opacity=0
   }, 10000);
  });

  });
  