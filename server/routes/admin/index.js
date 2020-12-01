module.exports = app => {
    const express = require('express');
    const router = express.Router(); // 创建子路由
    const MYSQL_DB = require('../../plugins/db');

    router.get('/test', (req, res) => {
        const sql = 'select * from adminUsers';
        const sqlAll = [];
        const callback = (err, data) => {
            if (err) {
                console.log('出错了');
            } else {
                res.send({
                    list: data
                })
            }
        }
        MYSQL_DB.sqlConnect(sql, sqlAll, callback)
    })
    app.use('/index.php/admin', router);
}