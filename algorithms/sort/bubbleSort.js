const bubbleSort = (array) => {
    let sorted = false;
    let unsortedUntilIndex = array.length - 1;

    while (!sorted) {
        sorted = true;

        for (let index = 0; index < unsortedUntilIndex; index++) {
            if (array[index] > array[index + 1]) {
                const lowerValue = array[index + 1];
                const higherValue = array[index];

                array[index] = lowerValue;
                array[index + 1] = higherValue;

                sorted = false;
            }
        }

        unsortedUntilIndex--;
    }

    return array;
};

console.log(bubbleSort([6, 4, 1, 3, 2, 5]));