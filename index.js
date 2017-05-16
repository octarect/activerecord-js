var Test = class {
  constructor(name) {
    this.name = name;
  }
  test() {
    return this.name;
  }
}
// module.exports = function(option) {
// };
module.exports = Test;
