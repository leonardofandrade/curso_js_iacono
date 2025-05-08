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

// Tipos de variáveis referenciadas
let object = { 
    name: "Leonardo", 
    age: 30 
}; // Objeto
console.log(object); // Saída: { name: 'Leonardo', age: 30 }
console.log(typeof object); // Saída: object
// object.name = "Andrade"; // Alterando o valor da propriedade name do objeto
console.log(object.name); // Saída: Leonardo

let array = [1, 2, 3, 4, 5]; // Array
console.log(array); // Saída: [1, 2, 3, 4, 5]
console.log(typeof array); // Saída: object
array[1] = 10; // Alterando o valor do índice 1 do array
console.log(array[0]); // Saída: 1
console.log(array); // Saída: [1, 2, 3, 4, 5]

function salesStatus(status, totalSales = 0) { // Função com parâmetros
    console.log("Total de vendas: " + totalSales); // Saída: Total de vendas: 0
    console.log("Status: " + status); // Saída: Status: [status]
}

salesStatus("Em andamento", 123); // Saída: Status: Em andamento
salesStatus("Concluído"); // Saída: Status: Concluído
salesStatus("Cancelado"); // Saída: Status: Cancelado

function percentage10(price) {
    return price - price * 0.1; // Retorna 10% do preço
}

console.log(percentage10(100)); // Saída: 90
// === Operador de comparação estrita (===) compara o valor e o tipo
// == Operador de comparação solta (==) compara apenas o valor
console.log(1 === 2); // Saída: false
console.log(1 === '1'); // Saída: true
console.log(1 == 1); // Saída: true

// ternary operator (operador ternário) - operador condicional
let age2 = 18;
let canDrive = (age2 >= 18) ? "Pode dirigir" : "Não pode dirigir"; // Se age2 for maior ou igual a 18, pode dirigir, senão não pode
console.log(canDrive); // Saída: Pode dirigir


// Operador lógico AND (&&) e OR (||)
let a = true;
let b = false;
console.log(a && b); // Saída: false (ambos devem ser verdadeiros para retornar true)
console.log(a || b); // Saída: true (pelo menos um deve ser verdadeiro para retornar true)

// Operadores Lógicos com strings
let str1 = "Hello";
let str2 = "World";
console.log(str1 && str2); // Saída: World (retorna o último valor avaliado como verdadeiro)
console.log(str1 || str2); // Saída: Hello (retorna o primeiro valor avaliado como verdadeiro)
console.log(str1 + str2); // Saída: HelloWorld (concatena as duas strings)
console.log(str1 + " " + str2); // Saída: Hello World (concatena as duas strings com espaço)

// Operador de negação (!)
let isTrue = true;
let isFalse = false;
console.log(!isTrue); // Saída: false
console.log(!isFalse); // Saída: true


// Operador de negação dupla (!!)
let isTrue2 = true;
let isFalse2 = false;
let isUndefined = undefined;
let isNull = null;
let isNaN = NaN;
console.log(!!isTrue2); // Saída: true
console.log(!!isFalse2); // Saída: false
console.log(!!isUndefined); // Saída: false
console.log(!!isNull); // Saída: false
console.log(!!isNaN); // Saída: false

// If e Else
let age3 = 25;
if (age3 >= 18) {
    console.log("Maior de idade"); // Saída: Maior de idade
}
else {
    console.log("Menor de idade"); // Saída: Menor de idade
}

// Switch Case
let day = 2;
switch (day) {
    case 1:
        console.log("Domingo"); // Saída: Domingo
        break;
    case 2:
        console.log("Segunda-feira"); // Saída: Segunda-feira
        break;
    case 3:
        console.log("Terça-feira"); // Saída: Terça-feira
        break;
    case 4:
        console.log("Quarta-feira"); // Saída: Quarta-feira
        break;
    case 5:
        console.log("Quinta-feira"); // Saída: Quinta-feira
        break;
    case 6:
        console.log("Sexta-feira"); // Saída: Sexta-feira
        break;
    case 7:
        console.log("Sábado"); // Saída: Sábado
        break;
    default:
        console.log("Dia inválido"); // Saída: Dia inválido
}