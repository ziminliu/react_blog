'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api hi';
  }
  async getArticleList() {
    const sql =
      // 'select * from article  left join type on article.type_id=type.id';
      'select article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime," +
      'article.view_count as view_count,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id=type.id';
    const results = await this.app.mysql.query(sql);
    this.ctx.body = { data: results };
    // console.log(results);
  }
  async getArticleById() {
    const id = this.ctx.params.id;
    const sql =
      'select article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime," +
      'article.view_count as view_count,' +
      'type.typeName as typeName ,' +
      'type.id as typeId ' +
      'FROM article LEFT JOIN type ON article.type_id=type.id ' +
      'WHERE article.id=' +
      id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}

module.exports = HomeController;

// RESTful App 前后端分离 简单和约束性
