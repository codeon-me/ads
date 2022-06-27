/**
 * Binary search can be used only for ordered arrays with numbers
 *
 * @param targetArray Ordered array
 * @param targetValue Value to be searched
 * @returns {null|{index: number, value: number}}
 */
const binarySearch = (targetArray, targetValue) => {
    let leftPosition = 0;
    let rightPosition = targetArray.length - 1;

    while (leftPosition <= rightPosition) {
        const midPosition = Math.floor((leftPosition + rightPosition) / 2);
        const midPositionValue = targetArray[midPosition];

        if (targetValue === midPositionValue) {
            return {
                value: midPositionValue,
                index: midPosition,
            };
        } else if (targetValue < midPositionValue) {
            rightPosition = midPositionValue - 1;
        } else if (targetValue > midPositionValue) {
            leftPosition = midPositionValue + 1;
        }
    }

    return null;
};


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 7;

console.log(binarySearch(array, targetValue));
