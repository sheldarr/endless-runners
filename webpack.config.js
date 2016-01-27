module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/bin',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    node: {
        console: true,
        fs: 'empty'
    }
};
