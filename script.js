let operators = {
  add(a,b) {
    return a + b;
  },

  subtract(a,b) {
   return a - b;
  },

  multiple(a,b) {
   return a * b;
  },

  divide(a,b) {
   return a / b;
  },

  operate(operator,a,b) {
	return operator(a,b);
  }
}