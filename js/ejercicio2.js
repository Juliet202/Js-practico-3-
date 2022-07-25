let miArray=[];

do{
    let textoIngresado = prompt('Ingrese una ciudad');
    miArray.push(textoIngresado);
}
while (confirm('Quiere ingresar otra ciudad ?'));
document.write(miArray);
document.write('<br></br>');

document.write('La longitud del arreglo es de: ' +miArray.length+ ' items');
document.write('<br></br>');

miArray.push('paris');
document.write(miArray);

document.write('<br></br>');
document.write(miArray[0]);
document.write(miArray[2]);



