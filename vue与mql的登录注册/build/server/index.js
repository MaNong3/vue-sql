const con = require("./db_connect");
const md5 = require("md5");

let getToken = (userId) => {
    let userToken = JSON.stringify({
        desc: "1607ljx",
        userid: userId,
        time: new Date().getTime() / 1000
    })
    let token = md5(userToken);
    updateToken(token, userId)
    return token;
}

let updateToken = (token, userId) => {
    let sql = `update user set token='${token}' where id=${userId}`;
    con.sqlHandle(sql).then(data => {}).catch(data => {})
}

module.exports = (app) => {
    //登录
    app.post("/getLogin", (req, res) => {
        let { name, pwd } = req.body;
        let sql = `select * from user where name='${name}'`;
        con.searchHandleNormal(sql).then(data => {
            con.searchHandleNormal(`select * from user where pwd='${pwd}'`).then(result => {
                let userId = data[0].id;
                let token = getToken(userId);
                data[0].token = token;
                res.json({ code: 0, msg: "登陆成功", data: data[0] })
            }).catch(result => {
                res.json({ code: 1, msg: "密码错误" })
            })
        }).catch(data => {
            res.json({ code: 1, msg: "用户名不存在" })
        })
    })

    //注册
    app.post("/getRegistry", (req, res) => {
        let { name, pwd } = req.body;
        let sql = `select * from user where name='${name}' and pwd='${pwd}'`;
        console.log(sql)
        con.searchHandle(sql).then(data => {
            con.sqlHandle(`INSERT INTO user (name, pwd) VALUES ('${name}', '${pwd}')`).then(result => {
                res.json({ code: 0, msg: "添加成功" })
            })
        }).catch(data => {
            res.json({ code: 1, msg: "注册名已存在" })
        })

    })
}