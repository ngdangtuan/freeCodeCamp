
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  else {
    return num * factorialize(num-1);
  }
}

factorialize(5); /* return 120 = 1 * 2 * 3 * 4 * 5 */
factorialize(20); /* 2432902008176640000 */
