<template>
    <div class="right_slider">
        <h3>考试管理</h3>
        <div class="msg">
            <el-table
            :data="tableData"
            border
            style="width: 100%">
                <el-table-column
                prop="date"
                label="班级名臣 "
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="出题人"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="阅卷状态">
                </el-table-column>
                <el-table-column
                prop="date"
                label="操作时间">
                </el-table-column>
                <el-table-column
                prop="address"
                label="成材率">
                </el-table-column>
                <el-table-column
                prop="name"
                label="操作">
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="800">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
}
</script>
<style scoped  lang="">
    .right_slider{
        width:100%;
        height: auto;
    }
    .right_slider>h3{
        width:100%;
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
    }
    .block{
        margin-top:20px;
    }
    .msg{
        padding:10px 15px;
        background: #fff;
    }
</style>