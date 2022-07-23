let miArray=[];
 
// bucle del 1 al 5
do{
    let textoIngresado = prompt('Ingrese una palabra');
    miArray.push(textoIngresado);
}
while (confirm('Quiere ingresar otra palabra?'));
document.write(miArray);