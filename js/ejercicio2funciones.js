function info (cadena) {

    let resultado = "La cadena \""+ cadena +"\" ";
  
    // Comprobar mayúsculas y minúsculas
    if(cadena == cadena.toUpperCase()) {
      resultado += " está formada sólo por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " está formada sólo por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
  
    return resultado;
  }
  
  document.write(info('hola mundo'));
document.write('<br></br>');
  document.write(info('Habia una vez'));
  document.write('<br></br>');
  document.write(info('LAS NOCHES SON MAS LARGAS'));