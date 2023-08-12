const path = require('path');

module.exports = {

    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode: 'development',
    devServer:{
        static:path.resolve(__dirname,'dist'),
        port:7600
    },module: {
        rules: [
        
          //Shaders
          {
            test:/\.(glsl|vs|fs|vert|frag)$/,
            exclude:/node_modules/,
            use:[
                'raw-loader'
            ]
          }
        ],
      },

}