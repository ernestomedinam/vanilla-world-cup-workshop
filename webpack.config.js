const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rootDir = fs.realpathSync(process.cwd());

module.exports = {
    entry: path.resolve(rootDir, "src/index.js"),
    mode: "development",
    devtool: "source-map",
    devServer: {
        allowedHosts: ["127.0.0.1", "localhost", "0.0.0.0"],
        static: path.resolve("assets"),
        hot: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
            }]
        }, {
            test: /\.(png|ico)$/,
            include: [path.resolve(rootDir, "assets")],
            use: [{
                loader: "file-loader"
            }]
        }]
    },
    output: {
        filename: "main.js",
        path: path.resolve(rootDir, "dist"),
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(rootDir, "src/template.html"),
            favicon: path.resolve(rootDir, "assets/favicon.ico")
        })
    ]
};
