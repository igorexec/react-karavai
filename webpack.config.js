const path = require('path')

const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/Karavai.jsx',

  mode: PRODUCTION ? 'production' : 'development',

  module: {
    rules: [{ test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' }]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  }
}
