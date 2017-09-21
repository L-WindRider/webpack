module.exports={
    entry:'./main.js',//入口
    output:{//出口
        filename:"bundle.js"
    },
    module:{
        loaders:[{
                test:/\.(png|jpg)$/,loader:'url-loader?limit=8192'//用url-loader打包png和jpg结尾的文件
        }]
    }
}