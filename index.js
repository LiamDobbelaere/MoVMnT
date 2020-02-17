const fs = require("fs");
const loader = require("@assemblyscript/loader");
const instance = loader.instantiateSync(
  fs.readFileSync(__dirname + "/build/untouched.wasm"),
  {
    /* imports */
  }
);

instance.init();
console.log(instance.getStackValue());

module.exports = instance;
