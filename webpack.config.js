const path = require('path');

const HTMLWebpackPlugin =  require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var ExtractTextPluginStyles = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
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
          	    use: ExtractTextPluginStyles.extract({
                use: [
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
				],
                fallback: "style-loader"
            })
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
    new HTMLWebpackPlugin({
      title: 'React/Redux App',
      template: __dirname + '/client/index.html',
      filename: 'index.html',
      favicon: __dirname + '/client/images/favicon.png',
      inject: 'body',
      cache: true,
      hash: true
    })
  ]
}