/**
 * Confeccionar una clase llamada suma, que contenga dos atributos (valor1, valor2) y tres métodos: 
 * cargarvalor1, cargarvalor2 y retornarresultado. Implementar la clase suma en un archivo separado. 
 * La definición de un objeto de la clase que deben plantear es:
 *   var s=new suma();
 *   s.primervalor(10);
 *   s.segundovalor(20);
 *   document.write('La suma de los dos valores es:'+s.retornarresultado());
 */

document.write("<h3>Creación y uso de clases</h3><hr>");

var s = new suma();
s.cargarvalor1(10);
s.cargarvalor2(20);
document.write(`La suma de los valores es igual a ${s.retornarresultado()}`);