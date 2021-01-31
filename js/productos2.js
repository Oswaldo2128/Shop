function leer_mostrar(clave1, clave2, clave3) {

    var formulario = document.getElementById("dropzone");
    var asidePromosiones = document.getElementById("asidePromosiones");
    //console.log(formulario.style);
    var elvalor1 = sessionStorage.getItem(clave1);

    var elvalor2 = sessionStorage.getItem(clave2);
    var elvalor3 = sessionStorage.getItem(clave3);
    // console.log(elvalor1);
    if (elvalor1 != null) {
        formulario.style.width = "74%";
        formulario.style.float = "left";
        asidePromosiones.style.width = "24%";
        asidePromosiones.style.display = "inline-block";
        asidePromosiones.style.textAling = "center";

        var imagen = document.createElement("img");
        imagen.setAttribute("style", " width:50%;");

        imagen.setAttribute("src", elvalor3);

        asidePromosiones.append(imagen);
        asidePromosiones.innerHTML += "<div> Descripcion: " + elvalor1 + "</div>";
        asidePromosiones.innerHTML += "<div> Precio: " + elvalor2 + "</div>";

    }
}

window.addEventListener("load", leer_mostrar("oferta1", "precio1", "img_oferta1"), false);
window.addEventListener("load", leer_mostrar("oferta2", "precio2", "img_oferta2"), false);
window.addEventListener("load", leer_mostrar("oferta3", "precio3", "img_oferta3"), false);