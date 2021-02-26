var myMap = new Map();
// Maps work like objects but are not objects.
myMap.set(1, "Uno")
myMap.set(2, "Dos")
myMap.set(3, "Tres")
myMap.set(4, "Cuatro")

console.log(myMap);

for (let key of myMap.keys()) {
    console.log(`Key is ${key}`);
}

for (let value of myMap.keys()) {
    console.log(`Value is ${value}`);
}

for (let [key, value] of myMap) { // Gives key first then value
    console.log(`Key is ${key} , Value is ${value}`);
}

myMap.forEach((key) => console.log(`${key}`)); // It will give out value rather than key. Because in for each it thinks of keys as indexes and therfore gives out only the values.
myMap.forEach((value) => console.log(`${value}`)); // Same output as the previous line. Gives out only the value.

// If you want both then -->

myMap.forEach((v,k) => console.log(`${v} and key is ${k}`)); // Gives value first then key

myMap.delete(2) // Key inside paranthesis
console.log(myMap);