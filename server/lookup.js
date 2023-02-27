const config = require("config");

function lookup(value) {
  return config.get(value);
}

module.exports = lookup;
