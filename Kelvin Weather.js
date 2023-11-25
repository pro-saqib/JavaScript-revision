const kelvin = 293;
// define a kelvin with a value 293
const celsius = kelvin - 273;
// subtract 273 from kelvin
let calc = celsius * (9 / 5) + 32;
// calculate fahrenheit from celsius
const fahrenheit = Math.floor(calc);
// calculate fahrenheit into nearest whole number
console.log(`The Temperature is ${fahrenheit} degrees Fahrenheit`);

// Extra Practice
// Convert Celsius to Newton scale

let calc2 = celsius * (33 / 100);
// calculate fahrenheit from celsius
const newton = Math.floor(calc2);

console.log(`The Temperature is ${newton} degrees Newton`);