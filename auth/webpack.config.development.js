const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const deps=require("./package.json").dependencies;
const Dotenv = require('dotenv-webpack');
module.exports =(env,args)=> ({
  entry: './index.js',
  mode: 'development',
  devtool: 'hidden-source-map',
  output: {
    publicPath: `${env.public_url}`,
    clean: true,
    
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
 },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.css', '.scss', '.jpg', 'jpeg', 'png'],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthRoute': './Routes.jsx',
      },
      remotes:{
        'lib-app':"lib_app@http://localhost:3000/remoteEntry.js"
      },
      shared: {
        ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      }
     
    }),
    new Dotenv({
      path: `./${env.mode}.env`, // load this now instead of the ones in '.env'
     
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
});
