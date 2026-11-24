// Questão 4: contarVogais(texto)
// Receba uma string e retorne quantas vogais ela contém (a, e, i, o, u),
// considerando maiúsculas e minúsculas. Letras acentuadas não contam.

function contarVogais(texto) {
  const mathces = texto.match(/[aeiou]/gi);
  return mathces ? mathces.length : 0;
}

// Testes (não altere esta parte)
console.log(contarVogais("Programação") === 5 ? "OK" : "ERRO");
console.log(contarVogais("JS") === 0 ? "OK" : "ERRO");
