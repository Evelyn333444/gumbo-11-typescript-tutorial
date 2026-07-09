//This is putting together what I learned in the basic and intermediate tutorials, and adding some new concepts to it.

//Below is a union type, which allows a variable to hold more than one type of value. In this case, the `id` parameter can be either a string or a number.
//Unions are easily identified by the pipe symbol (|) between the types. In this case, we are declaring a function `printID` that takes a parameter `id` which can be either a string or a number. The function then logs the value of `id` to the console.
const printID = (id: string | number) => {
    console.log("ID:" + id);
};

//Another cool trick is to name the union types, which is done by using the `type` keyword. In this case, we are declaring a type `IDGumbo` that can be either a string or a number. We then use this type in the `printID` function.
type IDGumbo = string | number;

const printID = (id: IDGumbo) => {
    console.log("ID:" + id);
};

printID("12345"); // Output: ID:12345. This is the string
printID(12345); // Output: ID:12345. This is the number


interface BusinessPartner {
    name: string;
    creditScore: number;
}

interface UserIdentity {
    id: number;
    email: string;
}

type Employee = BusinessPartner & UserIdentity; // This is an intersection type, which combines the properties of both interfaces. In this case, an `Employee` must have all the properties of both `BusinessPartner` and `UserIdentity`.

const signContract = (employee: Employee): void => {
    console.log("Contract signed by" + employee.name + " with credit score of " + employee.creditScore + " and email " + employee.email);
};

signContract({ 
    name: "John Doe", 
    creditScore: 750, 
    id: 1, 
    email: "john.doe@example.com" 
});


//Enums are a way to define a set of named constants. 
// In this case, we are defining an enum `LoginError` that has three possible values: `Unauthorized`, `NoUser`, and `InvalidPassword`. 
// Each value is associated with a string that describes the error.
enum LoginError {
    Unauthorized = "Unauthorized",
    NoUser = "user doesn't exist",
    InvalidPassword = "Invalid password"
}

const printErrorMsg = (error: LoginError) => {
    if (error === LoginError.Unauthorized) {
        console.log("Error: " + LoginError.Unauthorized);
    } else if (error === LoginError.NoUser) {
        console.log("Error: " + LoginError.NoUser);
    } else if (error === LoginError.InvalidPassword) {
        console.log("Error: " + LoginError.InvalidPassword);
    } else {
        console.log("Unknown error");
    }
}
    