
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

// 1.- Dado el objeto empleados, extrae la empleada Ana completa.
const [luis, ana] = empleados;
console.log("Ejercicio 1:", ana);


// 2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com
const { email: emailLuis } = luis;
console.log("Ejercicio 2:", emailLuis);


// 3.- Usa destructuración para cambiar los valores de a y b;
let a = 5;
let b = 3;

[a, b] = [b, a];

console.log("Ejercicio 3 - a:", a, "b:", b);


// 4.- Dado el objeto HIGH_TEMPERATURES
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log("Ejercicio 4 - Hoy:", maximaHoy, "Mañana:", maximaManana);



// 5.- sumEveryOther
function sumEveryOther(...numeros) {
    let resultado = numeros.reduce((acumulador, valorActual) => {
        return acumulador + valorActual;
    }, 0);
    return resultado;
}
console.log("Ejercicio 5:", sumEveryOther(6, 8, 2, 3, 1)); 
console.log("Ejercicio 5:", sumEveryOther(11, 3, 12)); 

// 6.- addOnlyNums
function addOnlyNums(...argumentos) {
    let soloNumeros = argumentos.filter((elemento) => {
        return typeof elemento === "number";
    });
    
    let suma = soloNumeros.reduce((acumulador, numero) => {
        return acumulador + numero;
    }, 0);
    
    return suma;
}
console.log("Ejercicio 6:", addOnlyNums(1, "perro", 2, 4)); 


// 7.- countTheArgs
function countTheArgs(...argumentos) {
    return argumentos.length;
}
console.log("Ejercicio 7:", countTheArgs("gato", "perro")); 
console.log("Ejercicio 7:", countTheArgs("gato", "perro", "pollo", "oso"));


// 8.- combineTwoArrays
function combineTwoArrays(arr1, arr2) {
    let arrayCombinado = [...arr1, ...arr2];
    return arrayCombinado;
}
console.log("Ejercicio 8:", combineTwoArrays([1, 2, 3], [4, 5, 6])); 


// 9.- onlyUniques
function onlyUniques(...argumentos) {
    let unicos = [];
    for (let i = 0; i < argumentos.length; i++) {
        if (!unicos.includes(argumentos[i])) {
            unicos.push(argumentos[i]);
        }
    }
    return unicos;
}
console.log("Ejercicio 9:", onlyUniques("gato", "pollo", "cerdo", "cerdo")); 
console.log("Ejercicio 9:", onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); 

// 10.- combineAllArrays
function combineAllArrays(...arrays) {
    let todoJunto = arrays.reduce((acumulador, arrayActual) => {
        return [...acumulador, ...arrayActual];
    }, []);
    
    return todoJunto;
}
console.log("Ejercicio 10:", combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));
console.log("Ejercicio 10:", combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));


// 11.- sumAndSquare
function sumAndSquare(...numeros) {
    let cuadrados = numeros.map((num) => {
        return num * num;
    });
    
    let sumaTotal = cuadrados.reduce((acumulador, numCuadrado) => {
        return acumulador + numCuadrado;
    }, 0);
    
    return sumaTotal;
}
console.log("Ejercicio 11:", sumAndSquare(2, 3, 4));

