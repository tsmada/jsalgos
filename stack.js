// FILO
// Array

createStack = () => {
  const stack = [];
  return {
    push(item) {
      stack.push(item);
    },
    pop() {
      stack.pop();
    },
    peek() {
      return stack[stack.length - 1]
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return stack.length === 0;
    }
  }
}

const s = createStack();

s.push('hello');
s.push('where did u go');
console.log(s.peek());
s.pop();
console.log(s.peek());