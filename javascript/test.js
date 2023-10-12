let ventana;
let ancho;
let alto;

function abreVentana() {
	ancho = window.prompt("¿Qué tamaño de ancho ventana desea?");
	alto = window.prompt("¿Y de alto?");
	ventana = window.open("https://www.programacionfacil.org", "", `width=${ancho}, height=${alto}`);
}