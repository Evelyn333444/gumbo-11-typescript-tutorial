let id: number = 5;
//In TS, you have to specify the type of a variable when you declare it. 
// In this case, we are declaring a variable `id` of type `number` and initializing it with the value `5`.

let company: string = "TechCorp";
let isPublished: boolean = true;

let ids: number[] = [1, 2, 3, 4, 5];
let x: any = "Hello"; 
// The `any` type allows a variable to hold any type of value.

let xArray: any[] = [1, true, "Hello"];

//To make an array, you always put straight brackets [] after the type of the variable. In this case, we are declaring an array of numbers.



//To put this all in practice:
const concatenateValues = (a: string, b: string) => {
    return a + b;
};

console.log(concatenateValues("Hello, ", "World!")); // Output: Hello, World!
console.log(concatenateValues("5", "10")); // Output: 510