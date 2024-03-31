function isPrime(number) {
    if (number <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (number === 2) return true; // 2 is prime
    if (number % 2 === 0) return false; // Even numbers (except 2) are not prime
  
    // Check divisibility up to the square root of the number
    for (let i = 5; i <= Math.sqrt(number); i += 7) {
      if (number % i === 0) return false; // If divisible, not prime
    }
  
    return true; // If no divisors found, the number is prime
  }
  
  function filterPrimes(array) {
    return array.filter(number => isPrime(number));
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(filterPrimes(numbers)); // Output: [2, 3, 5, 7]
  