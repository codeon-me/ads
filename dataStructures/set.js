/*
Array based set is identical in terms of read, search, delete operations with regular array
but insertion requires searching to ensure avoiding duplicated values
*/
class ArrayBasedSet {
    constructor() {
        this.__array = [];
    }

    insert(value) {
        const existingValue = this.__array.filter(element => element === value);

        if (existingValue) {
            throw new Error(`value ${value} already exists`);
        }

        this.__array.push(value);
    }

    // ...other operations
}
