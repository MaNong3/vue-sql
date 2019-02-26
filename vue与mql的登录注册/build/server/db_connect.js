const db_config = require("./db_config");
const mysql = require("mysql");
const moment = require('moment'); //数据库时间转js时间格式

//创建连接池
const connect = mysql.createPool(db_config.mysql_config);

//执行sql语句
const query = (sql) => {
    return new Promise((resolve, reject) => {
        connect.getConnection((err, con) => {
            con.query(sql, (sqlerr, rows, fileds) => {
                if (sqlerr) {
                    reject(sqlerr);
                    return;
                }
                resolve(rows);
                con.release(); //释放连接
            })
        })
    })
}

//读取数据操作
const readHandle = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql).then(data => {
            if (data.length > 0 && data[0].time != undefined) {
                data = data.map(i => {
                    i.time = moment(i.time).format('YYYY-MM-DD HH:mm:ss');
                    return i;
                })
            }
            resolve(data)
        }).catch(err => {
            reject(err)
        })
    })
}

//检测是否有值(有返回false) 比如:注册没被使用就返回false,存在就返回true
const searchHandle = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql).then(data => {
            if (data.length > 0) {
                reject("有值")
            } else {
                resolve("err")
            }
        }).catch(err => {
            reject(err)
        })
    })
}

//检测是否有值(true) 比如:有数据返回true
const searchHandleNormal = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql).then(data => {
            if (data.length > 0) {
                resolve(data)
            } else {
                reject("err")
            }
        }).catch(err => {
            reject(err)
        })
    })
}

//sql语句操作  
const sqlHandle = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql).then(data => {
            if (data.affectedRows > 0) {
                resolve(data)
            } else {
                reject("err")
            }
        }).catch(err => {
            reject(err)
        })
    })
}

module.exports = {
    sqlHandle,
    readHandle,
    searchHandle,
    searchHandleNormal,
    query
}