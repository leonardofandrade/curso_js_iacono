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

//Variáveis Primitivas
let number = 10; // Número
console.log(number); // Saída: 10
console.log(typeof number); // Saída: number
// Variáveis de tipo primitivo são imutáveis, ou seja, não podem ser alteradas
// Exemplo: number = 20; // Isso causará um erro, pois number é uma variável primitiva
let string = "Hello, World!"; // String
console.log(string); // Saída: Hello, World!
console.log(typeof string); // Saída: string

let boolean = true; // Booleano
console.log(boolean); // Saída: true
console.log(typeof boolean); // Saída: boolean

let bigInt = 1234567890123456789012345678901234567890n; // BigInt
console.log(bigInt); // Saída: 1234567890123456789012345678901234567890n
console.log(typeof bigInt); // Saída: bigint

let symbol = Symbol("description"); // Símbolo
console.log(symbol); // Saída: Symbol(description)  
console.log(typeof symbol); // Saída: symbol

let undefinedVar; // Indefinido
console.log(undefinedVar); // Saída: undefined  
console.log(typeof undefinedVar); // Saída: undefined

string = "Testando"; // Alterando o valor da variável string
console.log(string); // Saída: Testando
