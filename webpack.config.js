const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const port = process.env.PORT || 3000;

module.exports = env => {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
new Dotenv(),
new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
}),
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
  return {
      entry: './src/index.js',
      output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'dist')
      }
  }
  
};