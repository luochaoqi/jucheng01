const path=require("path");

module.exports={
    devServer:{
        open:true,
        proxy:{
            "/api":{
                target:"https://m.juooo.com",
                pathRewrite: {'^/api' : ''},
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                
            }
        }
    }
}