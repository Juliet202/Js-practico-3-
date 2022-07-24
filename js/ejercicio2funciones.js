function info (cadena) {

    let resultado = "La cadena "+ cadena;
  
    if(cadena == cadena.toUpperCase()) {
      resultado += " esta formada solo por mayusculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " esta formada solo por minusculas";
    }
    else {
      resultado += " esta formada por mayusculas y minusculas";
    }
  
    return resultado;
  }
  
  document.write(info('hola mundo'));
  document.write('<br></br>');
  document.write(info('Habia una vez'));
  document.write('<br></br>');
  document.write(info('LAS NOCHES SON MAS LARGAS'));