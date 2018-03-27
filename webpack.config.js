const path = require('path');

const HTMLWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ExtractHTMLWebpackPlugin = new HTMLWebpackPlugin({
  title: 'React/Redux App',
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  favicon: __dirname + '/client/images/favicon.png',
  inject: 'body',
  cache: true,
  hash: true
})

const ExtractTextPluginStyles = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

const isDevBuild = () => {
  return (process.env.NODE_ENV === 'development');
};

module.exports = {
  mode: isDevBuild ? 'development' : 'production',
  devtool: "source-map",
  entry: {
		'app': './client/index.jsx'
	},
  module: {
    rules: [
      {
				test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: "css-loader",
                    query: {
                      modules: true
                      }
                  }, 
                  {
                    loader: "sass-loader",
                    query: {
                      modules: true
                      }
                  }
				]
			},
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader:"file-loader",
        query:{
          name:'[name].[ext]',
          outputPath:'images/'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        query:{
          limit:'10000',
          name:'[name].[ext]',
          outputPath:'fonts/'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  output: {
    filename: '[name].js',
		path: __dirname + '/build'
  },
  plugins:[ 
    ExtractHTMLWebpackPlugin,
    ExtractTextPluginStyles
  ]
}