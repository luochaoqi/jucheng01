const path=require("path");

module.exports={
    devServer:{
        open:true,
        proxy:{
            "/api":{
                target:"https://m.juooo.com",
                pathRewrite: {'^/api' : ''},
                changeOrigin:true
            },
            "/ppp":{
                target:"https://api.juooo.com",
                pathRewrite: {'^/ppp' : ''},
                changeOrigin:true
            },
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                
            }
        }
    }
}