function escribirTablaMultiplicar(t){

document.write("<h2>Tabla de multiplicar del "+ t +"</h2>");

document.write("<ul>");

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(t + "x " + i + "= " + t * i);
		document.write("</li>");
	}
document.write("</ul>");
}
escribirTablaMultiplicar(5);