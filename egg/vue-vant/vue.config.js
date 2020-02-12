module.exports = {
    // 解决跨域
    devServer: {
        host: '0.0.0.0',        // 设置主机地址
        port: 9080,             // 设置默认端口
        open: true,             // 启动项目自动打开浏览器
        proxy: {
            '/article': {
                target: 'http://localhost:7001/',  //egg.js的服务器
                ws: true,
                changeOrigin: true,
            }
        }
    }
}