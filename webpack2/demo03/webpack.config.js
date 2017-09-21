module.exports={
    entry:'./main.js',//入口
    output:{//出口
        filename:"bundle.js"
    },
    module:{//解释器
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'}//匹配所有以css结尾的文件，用加载器style-loader!css-loader
        ]
    }
        

}