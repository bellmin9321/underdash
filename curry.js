function curry (func) {
  return function (...args) {
    return func(...args)
  }
}

function add(a, b, c) {
  return a + b + c;
}

const curryFunc = curry(add);

console.log(curryFunc(1, 2, 3));