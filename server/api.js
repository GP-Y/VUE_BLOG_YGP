const mysql = require('mysql');
const dbConfig = require('./base');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

module.exports = {

  //获取博客
  getBlog(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = 'SELECT * FROM blogs';
      connection.query(sql, (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },

  //获取指定博客
  getValue(req, res, next) {
      var id = req.query.id;
      pool.getConnection((err, connection) => {
        var sql = 'SELECT * FROM blogs WHERE id=?';
        connection.query(sql, [id], (err, result) => {
            res.json(result);
            connection.release();
        })
      })
    },

  //添加博客
  postBlog(req, res, next) {
    var id=req.body.id;
    var title=req.body.title;
    var content=req.body.content;
    var label=req.body.label;
    var url=req.body.url;
    var time=req.body.time;
    var tag=req.body.tag;
    var author=req.body.author;
    pool.getConnection((err, connection) => {
      var sql = 'INSERT INTO blogs VALUES(?,?,?,?,?,?,?,?)';
      connection.query(sql, [id,title,content,label,url,time,tag,author], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },

  //修改博客
  updBlog(req, res, next){
    var id=req.body.id;
    var title=req.body.title;
    var content=req.body.content;
    var label=req.body.label;
    var url=req.body.url;
    var time=req.body.time;
    var tag=req.body.tag;
    var author=req.body.author;
    pool.getConnection((err, connection) => {
      var sql = 'UPDATE blogs SET title=?,content=?,label=?,url=?,time=?,tag=?,author=? WHERE id=?';
      connection.query(sql, [title,content,label,url,time,tag,author,id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },

  //删除博客
    delBlog(req, res, next) {
      var id= req.body.id;
      pool.getConnection((err, connection) => {
        var sql = 'DELETE FROM blogs WHERE id=?';
        connection.query(sql, [id], (err, result) => {
            res.json(result);
            connection.release();
        })
      })
    },

  //添加留言
  postNews(req, res, next) {
    var msg= req.body.msg
    var time= req.body.time;
    pool.getConnection((err, connection) => {
      var sql = 'INSERT INTO news VALUES(?,?)';
      connection.query(sql, [msg,time], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },

  //获取留言
  getNews(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = 'SELECT * FROM news';
      connection.query(sql, (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },

  //删除留言
    delNews(req, res, next) {
      var msg= req.body.msg;
      pool.getConnection((err, connection) => {
        var sql = 'DELETE FROM news WHERE msg=?';
        connection.query(sql, [msg], (err, result) => {
            res.json(result);
            connection.release();
        })
      })
    },

  //获取用户
  getUser(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = 'SELECT * FROM user';
      connection.query(sql, (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  }
}
