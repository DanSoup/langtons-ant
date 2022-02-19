const path = require('path');
const dotenv = require('dotenv');
const config = require('./config.js');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const {DefinePlugin} = require('webpack');

module.exports = (wpEnv) => {

  const env = {
    ...process.env,
    ...wpEnv,
    BS_CONFIG: config
  };

  const modeVars = {
    local: {
      filename: 'index_bundle.js'
    },
    dev: {
      filename: 'index_bundle.js'
    },
    live: {
      filename: 'index_bundle.js',
      publicPath: env.LIVE_PUBLIC_PATH
    }
  }

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname , 'dist'),
      filename: modeVars[env.MODE].filename,
      publicPath: modeVars[env.MODE].publicPath
    },
    module: {
      rules: [
        {test: /\.js$/, use:'babel-loader', exclude: /node_modules/},
        {test: /\.css$/, use:['style-loader', 'css-loader']},
        {test: /\.s[ac]ss$/, use:['style-loader', 'css-loader', 'sass-loader']},
        {test: /\.(png|jpe?g|gif)$/i, use:['file-loader']},
        {test: /\.(woff|woff2|eot|ttf|otf)$/i, use:['file-loader']}
      ]
    },
    mode: 'development',
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: 'src/index.html'
        }),
        new DefinePlugin({
          'process.env': JSON.stringify({
            ...dotenv.config().parsed,
            ...env
          })
        })
    ]
  }
}