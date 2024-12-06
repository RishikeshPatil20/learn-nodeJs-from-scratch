// Import required module
import readline from "readline";

const qInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Solution = () => {
  // Prompt user to enter two numbers separated by a space
  qInterface.question(
    "Enter two numbers separated by a space: ",
    (userInput) => {
      // Extract two numbers from the user input
      const numbers = userInput.split(" ");
      const num1 = Number(numbers[0]);
      const num2 = Number(numbers[1]);

      // Calculate the maximum of the two numbers
      const max = Math.max(num1, num2);

      // Log the maximum value to the console
      console.log(`The maximum of ${num1} and ${num2} is: ${max}`);

      // Close the interface
      qInterface.close();
    }
  );
};
Solution();
module.exports = Solution;
