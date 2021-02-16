const version = process.env.VERSION || require('../package.json').version

const banner =
'/*!\n' +
' * data-tools.js v' + version + '\n' +
' * (c) 2021-' + new Date().getFullYear() + ' include maple\n' +
' * Released under the MIT License.\n' +
' */'

export const configs = {
  banner,
  entry: 'src/index.js',
  out: 'dist/data-tools'
}

// export const config = {
//   'data-tools-dev': {
//     entry: '../src/index.js',
//     out: '../dist/data-tools.js',
//     env: 'development',
//     format: 'umd',
//     banner
//   },
//   'data-tools-pro': {
//     entry: '../src/index.js',
//     out: '../dist/data-tools.js',
//     env: 'production',
//     format: 'umd',
//     banner
//   },
//   'data-tools-esm': {
//     entry: '../src/index.js',
//     out: '../dist/data-tools.js',
//     format: 'esm',
//     banner
//   },
//   'data-tools-cjs': {
//     entry: '../src/index.js',
//     out: '../dist/data-tools.js',
//     format: 'cjs',
//     banner
//   }
// }
