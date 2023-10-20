let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let numControl = id("num_control"),
    nombre = id("nombre"),
    primerAp = id("primer_ap"),
    segundoAp = id("segundo_ap"),
    edad = id("edad"),
    semestre = id("semestre"),
    carrera = id("carrera"),
    actividaes = id("actividades"),
    comentarios = id("comentarios"),
    form = id("form"),
    errorMsg = classes("error");


let engine = (id, serial, message, invalid) => {

    if (invalid) {
        errorMsg[serial].innerHTML = message;
        if (id.tagName === "INPUT" || id.tagName === "TEXTAREA" || id.tagName === "SELECT") id.style.border = "2px solid red";
    }

    else {
        errorMsg[serial].innerHTML = "";
        if (id.tagName === "INPUT" || id.tagName === "TEXTAREA" || id.tagName === "SELECT") id.style.border = "2px solid green";
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    validacion = true;
    let checkboxes = document.querySelectorAll('#actividades input[type="checkbox"]');
    engine(numControl, 0, "Solo debes escribir numeros", !/^[0-9]{1,8}$/.test(numControl.value));
    engine(nombre, 1, "Solo debes escribir letras", !/^[A-Za-z]+$/.test(nombre.value));
    engine(primerAp, 2, "Solo debes escribir letras", !/^[A-Za-z]+$/.test(primerAp.value));
    engine(segundoAp, 3, "Solo debes escribir letras", !/^[A-Za-z]+$/.test(segundoAp.value));
    engine(edad, 4, "Solo debes escribir números del 1 al 132", !/^[0-9]{1,3}$|^[0-9]{1,2}[0-9]{1,1}$|^132$/.test(edad.value));
    engine(semestre, 5, "Solo debes escribir números del 1 al 10", !/^[1-9]$|^10$/.test(semestre.value));
    engine(carrera, 6, "elige alguna carrera chida", carrera.value === "0");
    engine(actividaes, 7, "elige alguna actividad extra escolar", !Array.from(checkboxes).some(checkbox => checkbox.checked));
    engine(comentarios, 9, "deja un comentario hace mucho que nadie nos habla", comentarios.value.trim() === "");
});



function validarFormulario() {









    // // Validar primer apellido
    // let primerApellido = document.getElementById("primer_ap").value.trim();
    // if (!/^[A-Za-z]+$/.test(primerApellido)) {
    //     validacion = false;
    //     document.getElementById("primer_ap").style.border = "solid 1px red";
    // } else {
    //     document.getElementById("primer_ap").style.border = "solid 1px #ccc";
    // }

    // // Validar segundo apellido
    // let segundoApellido = document.getElementById("segundo_ap").value.trim();
    // if (!/^[A-Za-z]+$/.test(segundoApellido)) {
    //     validacion = false;
    //     document.getElementById("segundo_ap").style.border = "solid 1px red";
    // } else {
    //     document.getElementById("segundo_ap").style.border = "solid 1px #ccc";
    // }

    // // Validar edad
    // let edad = document.getElementById("edad").value;
    // if (!/^[0-9]+$/.test(edad)) {
    //     validacion = false;
    //     document.getElementById("edad").style.border = "solid 1px red";
    // } else {
    //     document.getElementById("edad").style.border = "solid 1px #ccc";
    // }

    // // Validar semestre
    // let semestre = document.getElementById("semestre").value;
    // if (!/^[0-9]+$/.test(semestre)) {
    //     validacion = false;
    //     document.getElementById("semestre").style.border = "solid 1px red";
    // } else {
    //     document.getElementById("semestre").style.border = "solid 1px #ccc";
    // }

    // // Validar comentarios
    // let comentarios = document.querySelector("textarea").value.trim();
    // if (comentarios === "") {
    //     validacion = false;
    //     document.querySelector("textarea").style.border = "solid 1px red";
    // } else {
    //     document.querySelector("textarea").style.border = "solid 1px #ccc";
    // }

    // // Validar al menos una opción de checkbox seleccionada
    // let checkboxes = document.querySelectorAll('#actividades input[type="checkbox"]');
    // let alMenosUnoSeleccionado = Array.from(checkboxes).some(checkbox => checkbox.checked);

    // if (!alMenosUnoSeleccionado) {
    //     validacion = false;
    //     alert("Selecciona al menos una actividad extraescolar.");
    // }

    // // Devolver true si la validación es exitosa, de lo contrario, false
    // return validacion;

}
