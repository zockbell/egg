const Controller = require('egg').Controller;

class ProductController extends Controller {
    async index() {
        const { ctx } = this;
        const res = await ctx.service.product.index();
        ctx.body = res;
    }

    // params参数
    async detail() {
        const { ctx } = this;
        console.log(ctx.params); 
        ctx.body = `id=${ctx.params.id}`;
    }
    
    // query参数
    async detail2() {
        const { ctx } = this;
        console.log(ctx.query);
        ctx.body = `id=${ctx.query.id}`;
    }

    // 新增商品
    async create() {
        const { ctx } = this;
        console.log(ctx.request.body);
        const { name, age } = ctx.request.body;
        ctx.body = {
            name,
            age
        }
    }

    // 更新商品
    async update() {
        const { ctx } = this;
        console.log(ctx.params);
        ctx.body = {
            id: ctx.params.id
        }
    }

    // 删除商品 
    async delete() {
        const { ctx } = this;
        console.log(ctx.params);
        ctx.body = {
            id: ctx.params.id
        }
    }
}

module.exports = ProductController;