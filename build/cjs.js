import {configs} from './config';
import resolve from 'rollup-plugin-node-resolve';


export default {
  input: configs.entry,
  output: {
    file: configs.out + '.cjs.js',
    format: 'cjs',
    banner: configs.banner
  },
  plugins: [
    resolve()
  ]
}
