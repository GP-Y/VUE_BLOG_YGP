const express = require('express');
const router = express.Router();
const api = require('./api');

router.post('/postBlog', (req, res, next) => {
  api.postBlog(req, res, next);
});

router.get('/getBlog', (req, res, next) => {
  api.getBlog(req, res, next);
});

router.post('/delBlog', (req, res, next) => {
  api.delBlog(req, res, next);
});

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});

router.post('/updBlog', (req, res, next) => {
  api.updBlog(req, res, next);
});

router.post('/postNews', (req, res, next) => {
  api.postNews(req, res, next);
});

router.get('/getNews', (req, res, next) => {
  api.getNews(req, res, next);
});

router.post('/delNews', (req, res, next) => {
  api.delNews(req, res, next);
});

router.get('/getUser', (req, res, next) => {
  api.getUser(req, res, next);
});


module.exports = router;
