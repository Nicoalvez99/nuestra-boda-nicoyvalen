let boton = document.getElementById("botonCopiar");


boton.addEventListener("click", function() {

    const textArea = document.createElement("textarea");
    textArea.value = document.getElementById("textoParaCopiar").textContent;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    
    document.body.removeChild(textArea);
    boton.style.color = "blue";
});

