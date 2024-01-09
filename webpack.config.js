const webpack = require('webpack');
const path = require('path');

const config = {
  mode:'development',
  entry: ['./src/index.js', './src/file_2.js'] ,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

module.exports = config;