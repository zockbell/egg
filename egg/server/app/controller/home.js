'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    
    const res = await app.mysql.select('article');
    console.log(res);

    ctx.body = res;
    /*
    const res = await ctx.service.product.index();
    await ctx.render('index.html', {
      res,
      lists: ['口罩', '酒精', '一次性手套']
    });
    */
  }
}

module.exports = HomeController;
