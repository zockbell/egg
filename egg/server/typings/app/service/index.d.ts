// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle = require('../../../app/service/article');
import ExportProduct = require('../../../app/service/product');

declare module 'egg' {
  interface IService {
    article: ExportArticle;
    product: ExportProduct;
  }
}
