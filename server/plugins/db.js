const mysql = require('mysql');
// 数据库配置
const config = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'blog'

};

module.exports = {

    sqlConnect: (sql, sqlArr, callback) => {
        let pool = mysql.createPool(config);
        pool.getConnection((err, conn) => {
            console.log('12345');
            if (err) {
                console.log('连接失败')
                return
            }
            // 事件驱动回调
            conn.query(sql, sqlArr, callback);
            // 释放连接
            conn.release();
        })
    }
}