'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // get请求
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/detail/:id',controller.product.detail);  // params模式
  router.get('/product/detail2',controller.product.detail2);  // query模式
  router.get('/article/list', controller.article.list) // 文件列表
  router.get('/article/detail/:id', controller.article.detail) // 文件详情

  // post请求
  router.post('/product/create', controller.product.create);
  router.post('/article/add', controller.article.add);
  // put请求，更新编辑
  router.put('/product/update/:id',controller.product.update);
  // delete请求，删除商品
  router.delete('/product/delete/:id',controller.product.delete);
};
