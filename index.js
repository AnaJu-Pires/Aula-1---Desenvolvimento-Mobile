import { unique, groupBy, sumBy } from "./arrayUtils.js";

const numbers = [1,2,2,2,4,4,3,2,5,1,10,12,3,3,3,4,10];

console.log("My numbers:", numbers);
console.log("Unique numbers:", unique(numbers), "\n\n");

const numbers2 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

console.log("My numbers2:", numbers2);
console.log("Unique numbers2:", unique(numbers2), "\n\n");


const sumnumbers = [
  { A: 10 },
  { A: 10 },
  { B: 40 },
  { B: 30 },
  { B: 2 },
  { C: 50 },
  { C: 60 },
  { C: 60 },
  { C: 60 },
];
console.log("My sum numbers:", sumnumbers);
console.log("Group by A:", groupBy(sumnumbers, "A"));
console.log("Group by B:", groupBy(sumnumbers, "B"));
console.log("Group by C:", groupBy(sumnumbers, "C"), "\n");
console.log("Sum of values of A:", sumBy(sumnumbers, "A"));
console.log("Sum of values of B:", sumBy(sumnumbers, "B"));
console.log("Sum of values of C:", sumBy(sumnumbers, "C"), "\n\n");


const list = [
    {name: "Ana Júlia", age: 21, city: "São Paulo"},
    {name: "Duda", age: 20, city: "Barra Mansa"},
    {name: "Raul", age: 22, city: "Guarulhos"},
    {name: "Jojo", age: 21, city: "Guarulhos"},
    {name: "Nat", age: 22, city: "São Paulo"},
];

console.log("My list:", list);
console.log("Group by city:", groupBy(list, "city"));
console.log("Sum of ages:", sumBy(list, "age"));

