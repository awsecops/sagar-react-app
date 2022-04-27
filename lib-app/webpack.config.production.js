const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports =(env,args)=> ({
  entry: './index.js',
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    publicPath: `${env.public_url}`,
    clean: true,
    
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: 'lib_app',
      filename: 'remoteEntry.js',
      exposes: {
        "./Axios":"axios",
              
      },
    }),
    new Dotenv({
      path: `./${env.mode}.env`, // load this now instead of the ones in '.env'
     
    }),
  ],
});
