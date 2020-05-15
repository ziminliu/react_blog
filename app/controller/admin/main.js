'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    this.ctx.body = 'hi admin';
  }
  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const sql =
      "select userName from admin_user where userName ='" +
      userName +
      "' and password ='" +
      password +
      "'";
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = { data: '登录成功', openId };
    } else {
      this.ctx.body = { data: '登录失败' };
    }
  }
  async getTypeInfo() {
    const resType = await this.app.mysql.select('type');
    this.ctx.body = { data: resType };
  }
  async addArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.insert('article', tmpArticle);
    const inserSuccess = result.affectRows === 1;
    const insertId = result.insertId;
    this.ctx.body = {
      isSuccess: inserSuccess,
      insertId,
    };
  }
  async updateArticle() {
    const tempArticle = this.ctx.request.body;
    console.log(tempArticle, ',+++++++++++++++++++++++++++');
    const result = await this.app.mysql.update('article', tempArticle);
    console.log(result, '1234');
    const updateSuccess = result.affectedRows === 1;
    this.ctx.body = {
      isSuccess: updateSuccess,
    };
  }
}

module.exports = MainController;
