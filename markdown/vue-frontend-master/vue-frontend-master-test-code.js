const myState = {
  a: 3,
  b: 30
};

Object.defineProperty(myState, 'b', {
  get() {
    return myState['a'] * 10;
  }
})

console.log(myState.b);
myState.a = 5;
console.log(myState.b)
