module.exports={
    assetDir:'assets',
    chainWebpack:config=>{
        config.module
        .rule("vue")
        .use("vue-loader")
        .loader("vue-loader")
    }
}