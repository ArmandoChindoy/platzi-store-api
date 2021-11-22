const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals')
const NODE_ENV = process.env.NODE_ENV;

/**  @type {import ('wepack').configuration} */
module.exports = {
  name: 'express-server',
  entry: path.resolve(__dirname, 'src/index.ts'),
  target: 'node',
  mode: NODE_ENV,
  externals:[nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins:[
    new NodemonPlugin({
      script:'./dist/index.js'
    })
  ]
//   devServer:{
//     open:true,
//     historyApiFallback: true,
//     compress: true,
//   }
};
