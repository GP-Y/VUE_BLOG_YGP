const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据是需要
const express = require('express');
const app = express();

var allowCors = function(req, res, next) {
     res.header('Access-Control-Allow-Origin', req.headers.origin);
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Content-Type');
     res.header('Access-Control-Allow-Credentials','true');
     next();
};
app.use(allowCors);

app.use(bodyParser.json());

// 后端api路由
app.use('/api', routerApi);

// 监听端口
app.listen(3000);//打包改3001
console.log('success listen at port:3000');
