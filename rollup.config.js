import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import handlebars from './src/compiler/rollup-plugin-handlebars';
import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss';
import cleaner from 'rollup-plugin-cleaner';
import typescript from '@rollup/plugin-typescript';
import cleanup from 'rollup-plugin-cleanup';
import { version } from './package.json';

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
    dir: `public/dist/js/${version}`,
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
      output: `public/dist/css/${version}/main.css`,
      outputStyle: dev ? null : 'compressed',
      sourceMap: dev
    }),
    typescript({
      sourceMap: dev
    }),
    cleanup({
      extensions: ['js', 'ts'],
      comments: 'none'
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
    handlebars(),    
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
    typescript({
      sourceMap: dev
    }),
    cleanup({
      extensions: ['js', 'ts'],
      comments: 'none'
    })
  ]
}];
