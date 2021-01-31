function comenzar() {
    console.log("Estamos listos!");
    var boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", function() {
        alert("Hiciste click");
        var clave1 = "oferta1";
        var valor1 = document.getElementById(clave1).innerText;
        var clave11 = "precio1";
        var valor11 = document.getElementById(clave11).innerText;
        var clave111="img_oferta1";
        var valor111= document.getElementById(clave111).src;

        console.log(valor1 + " - " + valor11+" - " + valor111);

        sessionStorage.setItem(clave1, valor1);
        sessionStorage.setItem(clave11, valor11);
        sessionStorage.setItem(clave111, valor111);

        /* leer_mostrar(clave1, clave11); */

    }, false);

    var boton2 = document.getElementById("boton2");
    boton2.addEventListener("click", function() {
        alert("Hiciste click");
        var clave1 = "oferta2";
        var valor1 = document.getElementById(clave1).innerText;
        var clave11 = "precio2";
        var valor11 = document.getElementById(clave11).innerText;
        var clave111="img_oferta2";
        var valor111= document.getElementById(clave111).src;

        console.log(valor1 + " - " + valor11+" - " + valor111);

        sessionStorage.setItem(clave1, valor1);
        sessionStorage.setItem(clave11, valor11);
        sessionStorage.setItem(clave111, valor111);

        /* leer_mostrar(clave1, clave11); */

    }, false);

    var boton3 = document.getElementById("boton3");
    boton3.addEventListener("click", function() {
        alert("Hiciste click");
        var clave1 = "oferta3";
        var valor1 = document.getElementById(clave1).innerText;
        var clave11 = "precio3";
        var valor11 = document.getElementById(clave11).innerText;
        var clave111="img_oferta3";
        var valor111= document.getElementById(clave111).src;

        console.log(valor1 + " - " + valor11+" - " + valor111);

        sessionStorage.setItem(clave1, valor1);
        sessionStorage.setItem(clave11, valor11);
        sessionStorage.setItem(clave111, valor111);

        /* leer_mostrar(clave1, clave11); */

    }, false);
}


window.addEventListener("load", comenzar, false);