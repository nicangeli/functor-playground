class Monad {
  constructor (val) {
    this.__value = val
  }
  static of (val) {
    return new Monad(val)
  }

  map(f) {
    return Monad.of(f(this._value))
  }

  join () {
    return this.__value 
  }

  chain (f) {
    return this.map(f).join()
  }

  ap (monad) {
    return monad.map(this.__value)
  }
}
