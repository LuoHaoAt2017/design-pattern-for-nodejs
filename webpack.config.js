const path = require("path");
const fs = require("fs");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const nodeModules = {};
fs.readdirSync('node_modules')
.filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
});


module.exports = {
  mode: 'development',
  target: "node",
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'] //resolve all the modules other than index.ts
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  externals: nodeModules,
}