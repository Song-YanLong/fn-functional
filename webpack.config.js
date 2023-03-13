// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = 'style-loader';



const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        library: {
            name: 'fn-functional', // 指定库名称
            type: 'umd', // 输出的模块化格式， umd 表示允许模块通过 CommonJS、AMD 或作为全局变量使用。
            export: 'default' // 指定将入口文件的默认导出作为库暴露。
        },
        globalObject: 'globalThis', // 设置全局对象为 globalThis，使库同时兼容 Node.js 与浏览器环境。
        clean: true
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                exclude: ['/node_modules/'],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env']]
                        }
                    },
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.less$/i,
                use: [stylesHandler, 'css-loader', 'less-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

    } else {
        config.mode = 'development';
    }
    return config;
};
