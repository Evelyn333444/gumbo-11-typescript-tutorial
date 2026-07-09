interface Employee {
    name: string;
    creditScore: number;
    id: number;
    email: string;
}

const employee: Employee = {
    name: "Jane Smith",
    creditScore: 800,
    id: 2,
    email: "jane.smith@example.com"
};

//Above is a read-only variable. 
// This means that once the `employee` object is created, its properties cannot be changed. If you try to change any of the properties, TypeScript will throw an error.