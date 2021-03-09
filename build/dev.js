import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import {configs} from './config';

export default {
  input: configs.entry,
  output: {
    name: 'dataTools',
    file: configs.out + '.js',
    format: 'umd',
    banner: configs.banner
  },
  plugins: [
    resolve(),
    babel({
      // exclude: 'node_modules/**',
    })
  ]
}
