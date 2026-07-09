class StorageContainer<T> {
    private items: T[] = [];

    cosntructor() {
        this.items = [];
    }

    addItem(item: T): void {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}


const usernames = new StorageContainer<string>();
usernames.addItem("Alice");
usernames.addItem("Bob");
console.log(usernames.getItems()); // Output: ["Alice", "Bob"]

const numbers = new StorageContainer<number>();
numbers.addItem(1);
numbers.addItem(2);
console.log(numbers.getItems()); // Output: [1, 2]