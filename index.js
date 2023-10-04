function hasTargetSum(array, target) {
  // Write your algorithm here
  // Initial position of the array.
  for (let i=0;i<array.length;i++){
    // Compare the position with the rest of the positions
    for (let j=i+1;j<array.length;j++){
      if(array[i] + array[j] === target){ //return true
        return true
      }
    } 
  }
  
  return false
  // Example usage:
  const numbers = [2, 7, 11, 15];
  const targetSum = 9;
  console.log(hasTargetSum(numbers, targetSum)); // Should return true (2 + 7 = 9)
  
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
 This  function takes two parameters, an array and a target number
 Return true if the any two numbers in the array add up to target.
 Or else return false. 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
