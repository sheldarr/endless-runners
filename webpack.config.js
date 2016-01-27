module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname + '/bin',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
