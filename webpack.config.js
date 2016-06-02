var webpack = require("webpack");

module.exports = {
    entry: {
        "vendor": "./app/vendor",
        "app": "./app/main",
    },
    output: {
        path: __dirname,
        filename: "./dist/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts/,
                loaders: ['ts-loader'],
                exclude: /node_modules/
            },
            {
             // Adding loader for CSS
            test:/\.css$/,loader:'style-loader!css-loader'

            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./dist/vendor.bundle.js"),
        new webpack.optimize.UglifyJsPlugin({minimize:true})
    ]
}