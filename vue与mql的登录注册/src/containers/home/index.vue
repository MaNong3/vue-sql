<template>
  <div class="form">
      <h3>登录</h3>
      <el-input
        placeholder="用户名"
        v-model="name"
        clearable>
      </el-input>
      <el-input
        v-model="pwd"
        placeholder="密码"
        clearable>
      </el-input>
      <el-checkbox v-model="checked">记住账号</el-checkbox>
      <p><el-button type="primary" @click="login">登录</el-button></p>
      <p><el-button @click="registry">立即注册</el-button></p>
  </div>
</template>

<script>
import {Login,Registry} from "@/api";

export default {
  data(){
    return {
      checked: false,
      name:"",
      pwd:""
    }
  },
  methods: {
    login(){
      if(this.checked){
        let obj={
            name:this.name,
            pwd:this.pwd
        }
        Login("/getLogin",obj).then(res=>{
          let msg=res.data.msg;
          if(res.data.code===0){
            this.$alert(msg, {
              confirmButtonText: '确定',
              callback: () => {
                this.$cookie.set("token",res.data.data.token,1);
                // this.$router.push("/content/addText")
              }
            });
          }else{
            this.$alert(msg, {
              confirmButtonText: '确定'
            });
            this.name="";
            this.pwd="";
          }
        })
      }
    },
    registry(){
      if(this.checked){
        let obj={
            name:this.name,
            pwd:this.pwd
        }
        Registry("/getRegistry",obj).then(res=>{
          if(res.data.code===0){
            this.$alert('请前往登录', {
              confirmButtonText: '确定'
            });
          }else{
            this.$alert('注册失败', {
              confirmButtonText: '确定'
            });
            this.name="";
            this.pwd="";
          }
        })
      }
    }
  },
  
}
</script>
<style scoped  lang="">
  .form{
    width: 350px;
    height:auto;
    padding:10px 20px;
    position: absolute;
    right:20px;
    top:30px;
    border-radius: 10px;
    background: #fff;
    padding-bottom: 20px;
  }
  .form h3{
    width:100%;
    height:45px;
    line-height: 45px;
    text-align: center;
  }
  .form .el-input{
    margin-top:10px;
  }
  .form p{
    width:100%;
    height:50px;
    line-height: 50px;
  }
  .form p .el-button{
    width:100%;
  }
</style>