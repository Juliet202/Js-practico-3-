let meses= ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE']

document.write('<ul>');
for (let indiceMeses = 0; indiceMeses < meses.length; indiceMeses++){
    document.write('<li>'+ meses [indiceMeses]+ '</li>')
}
document.write('</ul>')