<style scoped>
.layout {
    position: relative;
    border-radius: 4px;
    height: 100%;
}

.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 0px;
    left: 10px;
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-ceiling {
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
}

.layout-ceiling-main {
    float: right;
    margin-right: 15px;
    margin-top: 5px;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}
.login-form{
	width: 600px;
	padding: 100px;
}
</style>
<template>
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-logo"></div>
            <div class="layout-ceiling-main">
                <a href="#">用户注册</a>
            </div>
        </div>
        <div class="login-form">
            <Form ref="loginForm" :model="loginForm" :rules="ruleValidate" :label-width="80">
                <Form-item label="账户名" prop="username">
                    <Input v-model="loginForm.username" placeholder="请输入账户名"></Input>
                </Form-item>
                <Form-item label="账户密码" prop="password">
                    <Input v-model="loginForm.password" placeholder="请输入邮箱"></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('loginForm')">登录系统</Button>
                </Form-item>
            </Form>
        </div>
    </div>
</template>
<script>
import api from "../../api/api";

export default {
    data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                ruleValidate: {
                    username: [{
                        required: true,
                        message: '账户名不能为空',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(async (valid) => {
                    if (valid) {
                    	try{
	                    	let result = await api.ILogin({
	                    		url:"/user/login",
	                    		data:this.loginForm
	                    	})
	                    	console.log(result);
	                    }catch(error){
	                    	console.log(error);
	                    	this.$Message.error("服务器异常！请稍后再试");
                    	}
                    } else {
                        this.$Message.error('请输入账户名和账户密码!');
                    }
                })
            }
        }
}
</script>
