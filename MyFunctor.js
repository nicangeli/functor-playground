'use strict'

const add1 = a => a + 1

class MyFunctor {
  constructor (val) {
    this.val = val
  }
  map (fn) {
    return new MyFunctor(fn(this.val))
  }
}

let t = new MyFunctor(1)
console.log(t.map(add1))
