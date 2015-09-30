var path = require('path')

var rootPath = path.resolve(__dirname, './src'),
    jsRoot = path.join(rootPath, 'js'),
    sassRoot = path.join(rootPath, 'sass'),
    templateRoot = path.join(rootPath, 'templates'),
    outputPath = path.resolve(__dirname, './dist')

module.exports = {
    entry: {
        'medium-editor-insert-plugin': './src/js/medium-editor-insert-plugin.js',
    },
    output: {
        path: outputPath,
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'MediumEditorInsertPlugin'
    },
    resolve: {
        extensions: ['', '.js', '.hbs', '.scss'],
        root: rootPath,
        modulesDirectories: [
            'node_modules',
            rootPath,
            jsRoot,
            templateRoot
        ]
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel?stage=0'
            },
            {
                test: /.hbs$/,
                loader: 'handlebars'
            },
            {
                test: /.scss$/,
                loaders: ['style', 'css', 'sass'],
            }
        ]
    }
}
