import {configs} from './config';
import resolve from 'rollup-plugin-node-resolve';


export default {
  input: configs.entry,
  output: {
    file: configs.out + '.esm.js',
    format: 'esm',
    banner: configs.banner
  },
  plugins: [
    resolve()
  ]
}
