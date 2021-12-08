const Handlebars = require('handlebars');

module.exports = {
  process(src, filename, config, options) {
    const template = Handlebars.precompile(src);      

    return `module.exports = ${template.toString()};`;    
  }
};
