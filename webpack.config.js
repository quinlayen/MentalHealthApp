const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
    }
    module: {
        rules: [
            {test:/\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            },

            {test: /\.css$/,
            use: [
                {loader: 'style-loader'
                },
                {
                    loader: 'css-loader'.
                    options: {
                        modules: true,
                        camcelCase: true,
                        sourceMap: true
                    }
                }
            ]
            }
        ]
    }
      plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  // Webpack configuration goes here
};