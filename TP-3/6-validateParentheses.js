
// Verifica si los parentesis, corchetes y llaves en un string estan balanceados

function isBalanced(s) {
  const stack = []; // uso array como pila
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const char of s) {
    // Si es un simbolo de apertura, lo apilo
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    }
    // Si es un simbolo de cierre
    else if ([')', ']', '}'].includes(char)) {
      // Si la pila esta vacia o el tope no coincide, no esta balanceado
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  // Si al final la pila quedo vacía todo estaba bien balanceado
  return stack.length === 0;
}

console.log(isBalanced("([]{})")); 
console.log(isBalanced("(]"));     
console.log(isBalanced("([)]"));   
console.log(isBalanced("((()))")); 
