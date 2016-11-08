'use strict'

const devtool = 'source-map'

const entry = {
  app: ['babel-polyfill', './src/app.js']
}

const output = {
  path: './dist',
  publicPath: '/bundled/',
  filename: '[name].js'
}

const resolve = {
  extensions: [
    '',
    '.js',
    '.css'
  ]
}

const loaders = [{
  test: /.js$/,
  exclude: /node_modules/,
  loader: 'babel'
}, {
  test: /.css$/,
  loaders: ['style', 'css']
}]

module.exports = {
  devtool,
  entry,
  output,
  resolve,
  module: {
    loaders
  }
}
