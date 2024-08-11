// Define a 2D array
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  // Function to calculate the sum of an array
  const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);
  
  // Find the sum of each row
  const rowSums = myArray.map(row => sum(row));
  
  // Print the original array and row sums
  document.write("Original Array:");
  document.write(myArray);
  document.write("Row Sums:");
  document.write (rowSums);