<template>
    <div class='login'>
        <el-form label-position="left" label-width="0px" class="card-box login-form">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="email">
                <el-input name="email" type="text" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" type="password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;">
                登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                
            }
        },
        methods: {

        }
    
    }
</script>

<style>
.login {
    width: 100px;
    height: 200px;
}
</style>