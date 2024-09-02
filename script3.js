function sumOfSquares(arr) {
    // Use the reduce method to iterate through the array and sum up the squares
    return arr.reduce((sum, num) => sum + num * num, 0);
}

// Example usage:
const arr = [1, 2, 3, 4];
console.log(sumOfSquares(arr));