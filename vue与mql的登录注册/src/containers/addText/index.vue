<template>
    <div class="right_slider">
        <h3>考试管理</h3>
        <div class="msg">
            <h4>试卷信息</h4>
            <div class="textZE">
                <el-row type="flex" class="row-bg" justify="space-between">
                    <el-col :span="6">
                        <div class="grid-content">
                            <h5>选择课程</h5>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content">
                            <h5>考试班级</h5>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content">
                            <h5>考试日期</h5>
                             <el-input
                                placeholder="请选择日期"
                                suffix-icon="el-icon-date"
                                v-model="input2">
                            </el-input>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            options: [{
                value: '选项1',
                label: '考试一'
                }, {
                value: '选项2',
                label: '考试二'
                }, {
                value: '选项3',
                label: '考试三'
                }, {
                value: '选项4',
                label: '考试四'
                }, {
                value: '选项5',
                label: '考试五'
                }
            ],
            value: '',
            input2:""
        }
    }
}
</script>
<style scoped  lang="">
    .right_slider{
        width:100%;
        height: auto;
        padding-left:10px;
    }
    .right_slider>h3{
        width:100%;
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
    }
    .msg{
        width:100%;
        height:auto;
        padding:0 20px;
        background: #fff;
    }
    .msg h4{
        width:100%;
        height: 50px;
        line-height: 50px;
        border-bottom: thin solid #eee;
    }
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .el-select{
        width:100%;
        height:30px;
    }
</style>