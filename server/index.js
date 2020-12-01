const express = require('express');
const app = express();

// 连接数据库
// require('./plugins/db')(app);

// admin路由
require('./routes/admin/index')(app);

// web路由
require('./routes/web/index')(app);

// 静态资源
app.use('/uploads', express.static(__dirname + '/uploads'));


// 启动服务
app.listen(3000, () => {
    console.log('http://localhost:3000')
})