const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
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
      },
      {
        test: /\.css?$/,
        loader: 'style-loader'
      },
      {
        test: /\.css?$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
