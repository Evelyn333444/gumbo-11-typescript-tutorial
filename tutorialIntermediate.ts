//This covers objects, and is a combination of what I learned in the basic tutorial.
//To define objects, we use interface.
interface UserInterface {
    id: number;
    name: string;
    age: number;
    greet(message: string): void; // The `greet` method takes a string parameter and returns nothing (void).
};

const User: UserInterface = {
    id: 2,
    name: "John Doe",
    age: 23,
    greet: (message: string): void => {
        console.log(message);
    }
};

//in this case, greet is a function

User.greet("Hello, welcome to the TypeScript tutorial!"); // Output: Hello, welcome to the TypeScript tutorial!

User.age = 24; // This is valid because the `age` property is of type `number` and we are assigning a number to it.

//You can also put in error messages if your final product is missing an object from the interface
if (!User.age) {
    console.log("No Age Of the User");
} else {
    console.log(User.age);
}