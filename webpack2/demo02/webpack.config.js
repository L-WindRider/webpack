module.exports={//多入口
    entry:{//入口
       bundle1: "./bundle1.js",
       bundle2: "./bundle2.js"
    },
    output:{ //出口
        filename:"[name].js"//自动以变量的形式打包
    }
};