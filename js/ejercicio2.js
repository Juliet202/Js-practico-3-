let miArray=[];

do{
    let textoIngresado = prompt('Ingrese una palabra');
    miArray.push(textoIngresado);
}
while (confirm('Quiere ingresar otra palabra?'));
document.write(miArray);


document.write('La longitud del arreglo es de:' +miArray.length+ 'items');
document.write('<br></br>');
document.write(miArray[miArray.length]='paris');
