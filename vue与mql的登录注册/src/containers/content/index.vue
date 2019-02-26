<template>
    <div class="wrap"> 
        <el-row>
            <el-col :span="6" class="left_col">
                <div class="grid-content bg-purple">
                    <ul class="left_slider" ref="">
                        <li>
                            <router-link to="/content/addText">添加试题</router-link>
                        </li>
                        <li>
                            <router-link to="/content/textType">试题分类</router-link>
                        </li>
                        <li>
                            <a href="javascript:;">用户管理</a>
                        </li>
                        <li>
                            <a href="javascript:;">班级管理</a>
                        </li>
                        <li>
                            <a href="javascript:;">学生管理</a>
                        </li>
                        <li>
                            <a href="javascript:;">考试管理</a>
                        </li>
                        <li>
                            <a href="javascript:;">学生统计</a>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="grid-content bg-purple-light">
                    <router-view></router-view>
                </div></el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    data(){
        return {

        }
    }
}
</script>
<style scoped  lang="">
    .wrap{
        width:100%;
        height:600px;
    }
    .el-row {
        margin-bottom: 20px;
        height:600px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple {
        background: rgb(20, 20, 20);
    }
    .bg-purple-light {
        background: rgb(243, 239, 239);
    }
    .grid-content {
        min-height: 626px;
    }
    .left_slider{
        width:100%;
        height: auto;
    }
    .left_slider li{
        height:60px;
        line-height: 60px;
        text-indent:25px;
        border-bottom: thin solid #ccc;
        cursor: pointer;
    }
    .wrap .el-col-6{
    }
    .left_slider li a{
        color:#ccc;
    }
</style>