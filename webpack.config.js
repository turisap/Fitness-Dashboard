const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.resolve(__dirname, './public/scripts'),
            filename: 'bundle.js'
        },
        module: {
                rules: [{
                     loader: 'babel-loader',
                     test: /\.js$/,
                     exclude: /node_modules/
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath : 'assets/',
                                publicPath: 'scripts/'
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                            }
                        },
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=1000'
                },
                {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use : [
                            {
                                loader : 'css-loader',
                                options : {
                                    sourceMap : true // source map for css in development
                                }
                            },
                            /*{
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: (loader) => [
                                        require('postcss-import')({ root: loader.resourcePath }),
                                        require('postcss-cssnext')(),
                                        require('cssnano')()
                                    ]
                                }
                            },*/
                            {
                                loader : 'sass-loader',
                                options : {
                                    sourceMap : true
                                }
                            }
                        ]
                    })
                },

            ]
        },
        plugins : [
            CSSExtract,
        ],
        devtool: isProduction ? 'source-map' : 'cheap-eval-source-map', // source map for locating a bug in source files, not in the bundle
        devServer: {
            contentBase: path.join(__dirname, "public"),
            publicPath: "/scripts/",
            historyApiFallback: true // this line is for client-side routing
        },
    }
}