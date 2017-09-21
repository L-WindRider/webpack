var webpack=require('webpack');
module.exports={
entry:__dirname+'/main.js',//__dirname根目录
    output:{
        path:__dirname+'/',//路径
        filename:'bundle.js'
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
        new webpack.optimize.UglifyJsPlugin({//压缩代码
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']//排除关键字
            }
        })
    ]
};