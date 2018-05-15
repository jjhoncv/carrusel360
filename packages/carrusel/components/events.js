class Events {
  constructor () {
    this.functions = {}
  }

  register (name, fn, self){
    this.functions[name] = fn
    this.functions[name]['scope'] = self
  }

  dispatch (name, arg) {
    let scope = this.functions[name]['scope']
    this.functions[name].call(scope, arg);
  }
}

export {Events}
