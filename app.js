//Declaracion de variables
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

//Agregar funcion al btn para pausar o play al video
btn.addEventListener("click", function () {
      //Verifica si contiene la classlist en el HTML
    if (!btn.classList.contains("slide")) {
      //Agrega CSS
      btn.classList.add("slide");
      //Pausa video
      video.pause();
    } else {
      //Elimina CSS
      btn.classList.remove("slide");
      //Reproduce video
      video.play();
    }
  });

  //Esto es para el precarga, para que no se quede ahi
  const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
/* Temas vistos
DOMTokenList: 
document.querySelector(): Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo 
                        especificado de selectores. Llamar a las class del HTML.
addEventListener(): Registra un evento a un objeto en específico.
classList.contains(): devuelve una colección activa de DOMTokenList de los atributos de clase del elemento. -> contains( String ): Comprueba si la clase indicada existe en el 
                        atributo de clase del elemento.
classList.add(): devuelve una colección activa de DOMTokenList de los atributos de clase del elemento. -> add( String [, String] ): Añade las clases indicadas. Si estas clases existieran 
                en el atributo del elemento serán ignoradas.
classList.remove(): devuelve una colección activa de DOMTokenList de los atributos de clase del elemento. -> remove( String [, String] ): Elimina las clases indicadas.
play(): Intenta comenzar la reproducción de los medios.
pause(): Intenta detener la reproducción de los medios.

*/