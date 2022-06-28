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
