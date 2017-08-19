<template>
    <div id="container">
        <div id="wrap">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="50">

                <div id="tip">
                    没有账号?去 <a href="register">注册</a> OR <a href="/index">首页</a>
                </div>



                <Form-item label="账号" prop="account">
                    <i-input v-model="formValidate.account" placeholder="请输入用户名/邮箱"></i-input>
                </Form-item>
                <Form-item label="密码" prop="password">
                    <i-input type="password" v-model="formValidate.password" placeholder="请输入密码"></i-input>
                </Form-item>

               <!-- <Form-item prop="user">
                    <Input type="text" v-model="formValidate.account" placeholder="Username" size="24">
                    <Icon type="ios-person-outline" slot="prepend" size="24"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" v-model="formValidate.password" placeholder="Password" size="24">
                    <Icon type="ios-locked-outline" slot="prepend" size="24"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                </Form-item>-->

                <Form-item>
                    <i-button type="primary" @click="handleSubmit('formValidate')" style="width:116px;">提交</i-button>
                    <i-button type="ghost" @click="handleReset('formValidate')" style="width:116px;">重置</i-button>
                </Form-item>
            </Form>
        </div>

    </div>
</template>

<script>
    export default{
        data() {
            return {
                formValidate: {
                    account: '',
                    password: '',
                },
                ruleValidate: {
                    account: [
                        { required: true, message: '账号不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted() {

        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style scoped>

    #container {
        background: #ededed;
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
    }

    #wrap {
        background: #fff;
        width: 350px;
        height: 250px;
        padding: 20px 30px 10px 30px;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, .2);
        left: 50%;
        top: 50%;
        position: absolute;
        margin-left: -175px;
        margin-top: -125px;
        border-top: 4px #2ca290 solid;
    }

    #tip {
        padding: 10px 0px 10px 50px;
    }
</style>