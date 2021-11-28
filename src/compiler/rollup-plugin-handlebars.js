import { createFilter } from 'rollup-pluginutils';

import Handlebars from 'handlebars';

export default function (options = {}) {
  const filter = createFilter(
    options.include || [ '**/*.hbs', '**/*.handlebars', '**/*.mustache' ],
    options.exclude || 'node_modules/**'
  );

  return {
    transform (code, id) {
      if(!filter(id)) return;

      const template = Handlebars.precompile(code, options);

      const compiled = `export default ${template.toString()};\n`;    
      
      return {
        code: compiled
      };
    }
  };
};
