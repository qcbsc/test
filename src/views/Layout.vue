<template>
    <div class='layout'>
        <section class='btns'>
             <el-button class='add' type="primary" @click="add">添加</el-button>
        </section>
        <section>
            <el-table :data="tableData" border style="width: 100%" class='table'>
                <el-table-column prop="date" label="序号">
                </el-table-column>
                <el-table-column prop="name" label="名称">
                </el-table-column>
                <el-table-column prop="address" label="厂家">
                </el-table-column>
                <el-table-column prop="address" label="服务地址">
                </el-table-column>
                <el-table-column prop="address" label="操作">
                </el-table-column>
            </el-table>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'layout',
        data() {
            return {
                tableData: []
            }
        },
        methods: {
            add()  {

            }
        }    
    }
</script>

<style>
.layout {
     height: 100%;
}
.btns {
    height: 70px;
}
.add {
    margin: 17px 0 0 20px;
}
.table {
    width: 96%!important;
    margin: 0 auto;
}
</style>