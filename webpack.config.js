const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/app.jsx'),
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: 'localhost',
    port: 3000,
    proxy: {
      '^/api/*': {
        target: 'http://localhost:3002/api/',
        secure: false
      }
    }
  },
  module: {
    rules : [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/client/src'),
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015"],
          plugins: [
            "transform-es2015-destructuring",
            "transform-object-rest-spread"
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ],
  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
