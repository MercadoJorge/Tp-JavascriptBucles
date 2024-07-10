/*
2- Escribir un programa que solicite una nota (número) de 0  a 10.
 Luego mostrar la calificación en un alert según los siguientes rangos de nota:
 */
const nota = parseInt(prompt("Ingrese una nota"));
if (nota == 1 || nota == 2) {
  document.write("Muy deficiente");
} else {
  if (nota == 3 || nota == 4) {
    document.write("Insuficiente");
  }
  if (nota == 5 || nota == 6) {
    document.write("Suficiente");
  }
  if (nota == 7) {
    document.write("Bien");
  }
  if (nota == 8 || nota == 9) {
    document.write("Notable");
  }
  if (nota == 10) {
    document.write("Sobresaliente");
  }
  if (nota >= 11 || nota <=0){
    document.write("Ingrese un numero valido")
  }
}
