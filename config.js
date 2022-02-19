const fs = require('fs');

const config = {
  BS_FOLDER: "apps",
  BS_URL: "langtons-ant"
};

let bs = fs.readFileSync('./buildspec.yml', 'UTF8');

Object.entries(config).forEach(([key, value]) => {
  const reg = new RegExp(key + ': ".*?"');
  console.log(reg);
  bs = bs.replace(reg, key + ': "' + value + '"');
});

fs.writeFileSync('./buildspec.yml', bs);

module.exports = config;