const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/app/index.js'],
    app: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/app/app.js']
  },
  output: {
    path: path.join(__dirname, '..', '..', 'dist', 'app'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  mode: 'development',
  target: 'web',
  devtool: '#source-map',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.quill\/\.js$/,
        use: [{
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              declaration: false,
              target: 'es5',
              module: 'commonjs'
            },
            transpileOnly: true
          }
        }]
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'img/'
          }
        }]
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'html-loader',
          options: {
            outputPath: 'img/'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      template: './src/app/html/index.html',
      filename: './index.html',
      chunks: ['vendor', 'main'],
      excludeChunks: ['server']
    }),
    new HtmlWebPackPlugin({
      hash: true,
      template: './src/app/html/app.html',
      filename: './app.html',
      chunks: ['vendor', 'app'],
      excludeChunks: ['server']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};