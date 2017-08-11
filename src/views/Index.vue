<template>
    <div class="index">
        <el-col class="sideBar">
            <el-menu theme='dark' default-active='2'>
                <el-menu-item index="1"><i class="el-icon-menu"></i>NMS</el-menu-item>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>系统设置</template>
                    <el-menu-item index="2-1">
                        <router-link to="/msc">MSC管理</router-link>
                    </el-menu-item>
                 </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-menu"></i>用户服务</template>
                    <el-menu-item index="3-1">组织管理</el-menu-item>
                    <el-menu-item index="3-2">组管理</el-menu-item>
                    <el-menu-item index="3-3">移动台管理</el-menu-item>
                    <el-menu-item index="3-4">移动台使用情况</el-menu-item>
                    <el-menu-item index="3-5">移动台设备信息</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-menu"></i>拓扑服务</template>
                    <el-menu-item index="4-1">拓扑查询</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-menu"></i>性能服务</template>
                    <el-menu-item index="5-1">性能统计</el-menu-item>
                 </el-submenu>
                <el-submenu index="6">
                    <template slot="title"><i class="el-icon-menu"></i>导航一</template>
                    <el-menu-item index="6-1">选项1</el-menu-item>
                    <el-menu-item index="6-2">选项2</el-menu-item>
                    <el-menu-item index="6-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title"><i class="el-icon-menu"></i>告警服务</template>
                    <el-menu-item index="7-1">告警查询</el-menu-item>
                    <el-menu-item index="7-2">告警清除查询</el-menu-item>
                    <el-menu-item index="7-3"> 告警统计查询</el-menu-item>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title"><i class="el-icon-menu"></i>任务服务</template>
                    <el-menu-item index="1-1">任务管理</el-menu-item>
                  </el-submenu>
            </el-menu>
        </el-col>
        <div class="main">
           <section class="mainHeader">
                <el-button type="primary" @click="collapse">收起/展开</el-button>
           </section>
            <section class="mainContent">

            </section>
        </div>
        
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'hello',
        data () {
            return {
            sideSize: true
            }
        },
        methods: {
            collapse() {
                console.log($('.sideBar'));
                $('.sideBar').toggleClass('sideBarCollapse');
            }
        }
    }
</script>

<style>
#index {
    display: flex;
    width: 100vw;
    height: 100vh;
}
.main {
    flex: 1;
}
.mainHeader {
    height: 56px;
    line-height: 56px;
    background: #eef1f6;
}
.mainHeader button {
    margin: 0 20px;
}
.sideBar {
    width: 180px;
    min-width: 180px;
    height: 100vh;
    background: #324157;
    overflow: hidden;
}
.sideBarCollapse {
    width: 54px;
    min-width: 54px;
}
.bg-purple {
    background: #d3dce6;
}
.el-menu-item [class^=el-icon-]{
    margin-right: 20px;
}
.el-submenu [class^=el-icon-] {
    margin-right: 20px;
}
.el-submenu .el-menu-item {
    padding-left: 60px!important;
}
</style>

