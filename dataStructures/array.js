/*
Computer stores an array in a row and keeps track a memory address of its beginning/
 */
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
READ operation(index => value)
1-step operation
computer knows where the array begins and can perform shift right in accordance with requested index
 */
console.log(array[5]);

/*
SEARCH operation(value => index)
N operations, where N is requested index for first occurrence and array size for all
Computer knows where the array begins but doesn't know the data it contains. Each element should be examined one by one
 */
console.log(array.find(element => element === 5));

/*
INSERT operation
1 step for insertion and shift right(ARRAY SIZE - INDEX TO INSERT)
Worth case scenario - beginning
Best case scenario - end
 */
array.push(10);

/*
DELETE operation
1 step for deletion and shift right to compact the array
Worth case scenario - beginning
Best case scenario - end
 */
array.splice(5, 1);
// .splice(index, deleteCount);
// .pop() - from the end
// array.length = number - from the end
// .shift() - from the beginning
// .filter() - by creating a new array if many elements should be deleted

// RESULTING ARRAY
console.log(array);


// OPERATIONS CHEATSHEET
// CREATE
/*
const array = [1, 2, 3];
const array = Array.of(...elements)
const array = new Array(length or ...elements);
const array = existingArray.filter(...);
const array = array1.concat(array2); // does not change existing arrays
const array = Array.from(arrayLike [, mapFunction, thisArg]); // arrayLike - iterable object and objects with length and indexed elements(string, map, set)
const array = existingArray.flat([depth])
const array = existingArray.flatMap([depth]) like arr.map(...args).flat()
const array = existingArray.map((element, index, array) => {...} [, thisArg]) - crates a new array with mapped values of the existing array
const array = existingArray.slice(start, end) - shallow copy of a portion of existing array
 */

// READ
/*
array.length - array size
array[1] - by index
array.at(-1) allows to read from the end, like array[array.length - 1]
array1.forEach(element => console.log(element)) - read all elements one by one
 */

// SEARCH
/*
array.find((element, index, array) => {...} [, thisArg]) - first element that passes the predicate
array.indexOf(value) - index of provided value or -1
array.findIndex((element, index, array) => {...} [, thisArg]) - first index that passes the predicate function
array.filter((element, index, array) => {...} [, thisArg]) - return new array with elements that pass the predicate
array.includes(element [, fromIndex]) - whether an array includes a certain value
array.some((element, index, array) => {...} [, thisArg]) - whether at least one element passes the predicate function
array.every((element, index, array) => {...} [, thisArg]) - whether all elements pass the predicate function
 */

// INSERT/UPDATE/TRANSFORM
/*
array.push(...items) - to the end, returns new length
===================================================================
let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem)
    }
}
obj.addElem({})
obj.addElem({})
console.log(obj.length) => 2
===================================================================
array[index] = newValue;
array.fill(value[, start, end])
array.copyWithin(target, start, end) - shallow copy within an array
array.reverse() - reverse an array
array.sort([compareFn(a, b)]) - lexicographic sorting by default or compareFn should return -1, 0, 1
===================================================================
> 0	sort a after b
< 0	sort a before b
=== 0 keep original order of a and b
===================================================================
array.splice(start, [deleteCount, item1, item2, itemN]) - allows to replace items
array.unshift(...elements) - adds new elements to the beginning and returns new array size
 */

// DELETE
/*
array.pop() - deletes and returns the last element
array.shift() - deletes and returns the first element
array.splice(start, [deleteCount]) - allows to delete items

 */


// OTHER
/*
array.entries() - returns Array Iterator key/value pairs of each index
array.keys() - returns Array Iterator with keys for each index(ignores holes)
array.values() = returns Array Iterator with values
inventory.group( ({ type }) => type ); - returns object where key - group name, values - grouped items
inventory.groupToMap( ({ type }) => type ); - returns Mep where key - group name, values - grouped items
Array.isArray()
elements.join(separator) - concatenate elements into string
array.reduce((accumulator, currentElement, currentIndex, array) => { ... }, initialAccumulator) - reduce an array to accumulator
array.reduceRight((accumulator, currentElement, currentIndex, array) => { ... }, initialAccumulator) - reduce from right-to-left
 */

