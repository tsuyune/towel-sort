module.exports = function towelSort(matrix) {
    let sorted = [];

    for (let key in matrix) {
        if (key % 2 !== 0) {
            matrix[key].sort((a, b) => b - a);
        }
        matrix.sort((a, b) => a - b);
        sorted = sorted.concat(matrix[key]);
    }

    return sorted;
}
