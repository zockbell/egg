const Service = require('egg').Service;

class ProductService extends Service {
    async index() {
        return {
            id: 16,
            name: 'zhangsan',
            lists: [1,2,3],
        }
    }
}

module.exports = ProductService;