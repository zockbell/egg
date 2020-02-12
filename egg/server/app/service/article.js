const Service = require('egg').Service;

class ArticleService extends Service {
    async create(params) {
        const { app } = this;
        try{
            const result = await app.mysql.insert('article',params);
            return result;
        }catch(err) {
            console.log(err);
            return null;
        }
    }

    // 文章列表
    async list() {
        const { app } = this;
        try{
            const result = await app.mysql.select('article');
            return result;
        }catch(err){
            console.log(err);
            return null;
        }
    }

    // 文章详情
    async detail(id) {
        if(!id) {
            console.log('id不能为空');
            return null;
        }
        try{
            const result = await this.app.mysql.get('article', {id});
            return result;
        }catch(err){
            console.log(err);
            return null;
        }
    }
}

module.exports = ArticleService;