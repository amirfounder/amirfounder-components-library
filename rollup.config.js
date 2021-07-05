import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';
// import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'


export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        export: 'named'
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true
      }),
      resolve({
        mainFields: ['module', 'main', 'jsnext:main', 'browser'],
        extensions: ['.js', '.jsx']
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external(),
      // terser(),
      commonjs()
    ]
  }
]
