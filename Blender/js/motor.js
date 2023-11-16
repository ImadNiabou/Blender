var estadoLiquadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var buttonLicuadora = document.getElementById("blender-button-sound");

function controlarLiquadora() {
    if ( estadoLiquadora == "apagada" ) {
        estadoLiquadora = "encendido";
        hacerSonido();
        licuadora.classList.add("active");
        // console.log("Me has encendido");
    } else {
        estadoLiquadora = "apagada"
        hacerSonido();
        licuadora.classList.remove("active");
        // console.log("Me has apagado");
    }
}

function hacerSonido () {
    if ( sonidoLicuadora.paused ) {
        buttonLicuadora.play();
        sonidoLicuadora.play();
    } else {
       buttonLicuadora.play();
       sonidoLicuadora.pause();
       sonidoLicuadora.currentTime = 0;
    }
}