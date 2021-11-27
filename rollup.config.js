import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss';
import cleaner from 'rollup-plugin-cleaner';
import handlebars from 'rollup-plugin-handlebars';
import typescript from '@rollup/plugin-typescript';

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'dev:server'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default [{
  input: 'src/client/main.ts',
  output: {
    dir: 'public/dist/js',
    format: 'es',
    sourcemap: dev,
    manualChunks: {
      globals: ['./src/globals.ts'],    
      'base-layout': ['./src/client/views/layouts/base-layout.ts'],
      'default-layout': ['./src/client/views/layouts/default/default-layout.ts'],
      'main-layout': ['./src/client/views/layouts/main/main-layout.ts'],
      ripple: ['@material/ripple']
    }
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    !dev && terser(),
    scss({
      output: 'public/dist/css/main.css',
      outputStyle: dev ? null : 'compressed',
      sourceMap: dev
    }),
    cleaner({
      targets: [
        './public/dist/js',
        './public/dist/css'
      ]
    }),
    typescript({
      sourceMap: dev
    })
  ]
}, {
  input: 'src/server/main.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: dev    
  },
  plugins: [
    commonjs(),
    json(),
    nodeResolve(),
    dev && serve(),
    !dev && terser(),
    cleaner({
      targets: [
        './dist'
      ]
    }),
    handlebars(),
    typescript({
      sourceMap: dev
    })
  ]
}];
