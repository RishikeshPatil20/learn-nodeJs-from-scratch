// Import the required modules
const sum = require('./math').sum;
const mean = require('./math').mean;

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // Calculate the sum and mean using the imported functions
    const calculatedSum = sum(nums);
    const calculatedMean = mean(nums);
    
    // Console log the computed sum and mean
    console.log("Sum: ", calculatedSum);
    console.log("Mean: ", calculatedMean);
};

Solution();

module.exports = Solution;