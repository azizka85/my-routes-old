import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss';
import cleaner from 'rollup-plugin-cleaner';
import typescript from '@rollup/plugin-typescript';
import cleanup from 'rollup-plugin-cleanup';
import { version } from './package.json';

import handlebars from './src/compiler/rollup-plugin-handlebars';
import serve from './src/compiler/rollup-plugin-serve';

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';

export default [{
  input: 'src/client/main.ts',
  output: {
    dir: `public/dist/js/${version}`,
    format: 'es',
    sourcemap: dev,
    manualChunks: {
      router: ['@azizka/router'],
      globals: ['./src/globals.ts'],   
      helpers: ['./src/helpers.ts'], 
      'client-helpers': ['./src/client/helpers.ts'],
      'base-layout': ['./src/client/views/layouts/base-layout.ts'],
      'default-layout': ['./src/client/views/layouts/default/default-layout.ts'],
      'main-layout': ['./src/client/views/layouts/main/main-layout.ts'],    
      base: ['@material/base'],
      dom: ['@material/dom'],
      ripple: ['@material/ripple'],
      list: ['@material/list']
    },
    chunkFileNames: '[name].js'
  },
  plugins: [
    cleaner({
      targets: [
        `./public/dist/css/${version}`,
        `./public/dist/js/${version}`
      ]
    }),
    commonjs(),
    nodeResolve(),    
    scss({
      output: `public/dist/css/${version}/main.css`,
      outputStyle: dev ? null : 'compressed',
      sourceMap: dev
    }),    
    typescript({
      sourceMap: dev
    }),
    !dev && terser(),
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
    sourcemap: dev,
    manualChunks: {
      app: ['./src/server/app.ts'],
      helpers: ['./src/helpers.ts']
    },
    chunkFileNames: '[name].js'
  },
  plugins: [
    cleaner({
      targets: [
        './dist'
      ]
    }), 
    handlebars(),    
    commonjs(),
    json(),
    nodeResolve(),    
    typescript({
      sourceMap: dev
    }),
    !dev && terser(),       
    cleanup({
      extensions: ['js', 'ts'],
      comments: 'none'
    }),
    dev && serve()
  ]
}];
