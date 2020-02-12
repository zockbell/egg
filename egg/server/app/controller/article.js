const Controller = require('egg').Controller;
const moment = require('moment');

class ArticleController extends Controller {
    async add() {
        const { ctx } = this;
        const params = {
            ...ctx.request.body,
            createTime: moment().format('YYYY-MM-DD HH:mm:ss')
        };
        const result = await ctx.service.article.create(params);
        console.log(result);
        if(result) {
            ctx.body = {
                status: 200,
                data: result
            }
        }else{
            ctx.body = {
                status: 500,
                errMeg: '发布文章失败'
            }
        }
    }

    async list() {
        const { ctx } = this;
        const result = await ctx.service.article.list();
        if(result){
            ctx.body = {
                status: 200,
                data: result
            }
        }else{
            ctx.body = {
                status: 500,
                errMeg: '查询文章列表失败'
            }
        }
    }

    async detail() {
        const { ctx} = this;
        const result = await ctx.service.article.detail(ctx.params.id);
        if(result){
            ctx.body = {
                status: 200,
                data: result
            }
        }else {
            ctx.body = {
                status: 500,
                errMeg: '查询文章详情id失败'
            }
        }

    }
}

module.exports = ArticleController;