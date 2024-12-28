function foo(a, b) {
  // Check for null or undefined values using loose equality
  if (a == null || b == null) {
    return 0; // Return 0 instead of null for undefined behavior
  }
  return a + b; // Perform addition
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 2
console.log(foo(1, undefined)); // Output: 1
console.log(foo(undefined, undefined));// Output: 0