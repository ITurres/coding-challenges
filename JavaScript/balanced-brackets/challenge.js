function balancedBrackets(string) {
  const filteredString = string.split('').filter((char) => !/\w/g.test(char));
  const stack = [];
  let isBalanced = true;
  const brackets = {
    openingBrackets: ['{', '[', '('],
    closingBrackets: ['}', ']', ')'],
    bracketPairs: {
      '}': '{',
      ']': '[',
      ')': '('
    }
  };

  filteredString.forEach((char) => {
    if (brackets.openingBrackets.includes(char)) {
      stack.push(char);
    } else if (brackets.closingBrackets.includes(char)) {
      if (stack.length === 0) {
        isBalanced = false;
        return;
      }
      const stackTopElement = stack.pop();
      if (brackets.bracketPairs[char] !== stackTopElement) {
        isBalanced = false;
        return;
      }
    }
  });

  return isBalanced && stack.length === 0;
}

console.log(balancedBrackets('(hello)[world]'));
// => true

console.log(balancedBrackets('([)]'));
// => false

console.log(balancedBrackets('[({}{}{})([])]'));
// => true

module.exports = balancedBrackets;
