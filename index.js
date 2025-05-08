console.log("Hello, World!");

//Declaração de variáveis pode ser feita com var, let ou const
let firstName = "Leonardo"; // Variável que pode ser alterada
let lastName = "Andrade"; // Variável que pode ser alterada
console.log(firstName); // Saída: Leonardo
console.log(lastName); // Saída: Andrade

const age = 30; // Variável que não pode ser alterada
// age = 20; // Isso causará um erro, pois age é uma constante
console.log(age); // Saída: 30

//ASI - Automatic Semicolon Insertion
// O JavaScript insere ponto e vírgula automaticamente em algumas situações
console.log("Hello, ASI!") // Saída: Hello, World!