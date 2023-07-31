

function decimalToBinary(decimalNumber) {
  if (decimalNumber === 0) {
    return "0"; // Special case for input 0
  }

  let binary = "";
  while (decimalNumber > 0) {
    binary = (decimalNumber % 2) + binary;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binary;
}

// Example usage:
const decimalNumber = 25;
const binaryNumber = decimalToBinary(decimalNumber);
console.log("Binary representation of", decimalNumber, "is", binaryNumber);

window.decimalToBinary = decimalToBinary;
