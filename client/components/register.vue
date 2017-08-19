<template>

    <div id="container">

        <div id="wrap">
            <Steps :current="current" id="step">
                <Step title="基本信息" icon="person-add"></Step>
                <Step title="附加信息" icon="person-add"></Step>
                <Step title="上传头像" icon="camera"></Step>
                <Step title="验证邮箱" icon="email"></Step>
            </Steps>



            <Form v-if="current==0" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <Form-item label="姓名" prop="username">
                    <i-input v-model="formValidate.username" placeholder="请输入姓名"></i-input>
                </Form-item>
                <Form-item label="邮箱" prop="email">
                    <i-input v-model="formValidate.email" placeholder="请输入邮箱"></i-input>
                </Form-item>

                <Form-item label="密码" prop="password">
                    <i-input v-model="formValidate.password" placeholder="请输入密码"></i-input>
                </Form-item>

                <Form-item label="重复密码" prop="repassword">
                    <i-input v-model="formValidate.repassword" placeholder="请再次输入密码"></i-input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                </Form-item>
            </Form>

            <Form v-if="current==1" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                1
            </Form>

            <Form v-if="current==2" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                2
            </Form>

            <Form v-if="current==3" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                3
            </Form>

            <i-button type="primary" @click="next">下一步</i-button>
        </div>


    </div>
    <!--<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
        </Form-item>
        <Form-item label="邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
        </Form-item>
        <Form-item label="城市" prop="city">
            <Select v-model="formValidate.city" placeholder="请选择所在地">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
        </Form-item>
        <Form-item label="选择日期">
            <Row>
                <Col span="11">
                <Form-item prop="date">
                    <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
                </Form-item>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                <Form-item prop="time">
                    <Time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></Time-picker>
                </Form-item>
                </Col>
            </Row>
        </Form-item>
        <Form-item label="性别" prop="gender">
            <Radio-group v-model="formValidate.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="爱好" prop="interest">
            <Checkbox-group v-model="formValidate.interest">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="介绍" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </Form-item>
    </Form>-->
</template>
<script>
    export default {
        data () {
            return {
                current: 0,
                formValidate: {
                    username: '',
                    email: '',
                    password: '',
                    repassword: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    username: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                    ],
                    repassword: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                }
            }
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
            },
            next () {
                console.log(this.current);
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
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
        width: 600px;
        height: 400px;
        padding: 30px 30px 10px 30px;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, .2);
        left: 50%;
        top: 50%;
        position: absolute;
        margin-left: -300px;
        margin-top: -200px;
        border-top: 4px #2ca290 solid;


    }


</style>