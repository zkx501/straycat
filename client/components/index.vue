<template>
    <div id="container">
        <Affix>
            <Row id="header">
                <i-col span="2">&nbsp;</i-col>

                <i-col span="20">
                    <ul>
                        <li><a>首页</a></li>
                        <li><a>关于</a></li>
                        <li><a>图片库</a></li>
                        <li><a>存档</a></li>
                        <li><a>登录/注册</a></li>
                        <li><a>test</a></li>
                    </ul>
                </i-col>
                <i-col span="2">&nbsp;</i-col>
            </Row>
        </Affix>

        <Row id="recommend">
            <i-col span="2">&nbsp;</i-col>
            <i-col span="14" class="content">
                每周荐书：Kotlin、分布式、Keras（评论送书） 【获奖公布】征文|你会为AI转型？ 热门搜索：java、
                python,c++,spring,php
            </i-col>
            <i-col span="8">&nbsp;</i-col>
        </Row>

        <Row id="main">
            <i-col span="2">&nbsp;</i-col>
            <i-col span="14">
                <div class="article">
                    <div class="title"> <a href="#">让世界充满AI—时代的开拓者（程序员）</a></div>
                    <div class="introduction">
                        人工智能是一门涵盖多学科知识，而又被当今社会广泛应用于多领域，给人带来便捷、高效的同时，
                        又让业界为其担心的交叉学科知识的综合产物。随着各种智能机器人开始服务于各大领域，有超强力量的机械手臂，
                        高效解决问题的专家系统，公众日常可接触到的可穿戴智能设备，
                        从智能手机到各类功能的3D打印技术，从谷歌眼镜到全息投影，各类机器设备如雨后春笋不断涌出。


                    </div>

                    <ul class="commend">
                        <li>2017-8-18 13:34</li>
                        <li><a href="#">阅读</a>(111)</li>
                        <li><a href="#">评论</a>(222)</li>
                        <li><a href="#">点赞</a>(333)</li>
                    </ul>

                </div>


            </i-col>

            <i-col span="6" id="sider">
                <Row class="card">
                    书签
                    <Tag color="blue">标签一</Tag>
                    <Tag color="green">标签二</Tag>
                    <Tag color="red">标签三</Tag>
                    <Tag color="yellow">标签四</Tag>
                </Row>

                <Row class="card">
                    最新文章
                    <ul>
                        <li><a>文章1</a></li>
                        <li><a>文章2</a></li>
                        <li><a>文章3</a></li>
                    </ul>
                </Row>

                <Card class="card">
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        经典文章
                    </p>
                    <a href="#" slot="extra" @click.prevent="changeLimit">
                        <Icon type="ios-loop-strong"></Icon>
                        换一换
                    </a>
                    <ul>
                        <li v-for="item in randomMovieList">
                            <a :href="item.url" target="_blank">{{ item.name }}</a>
                            <span>
                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                </span>
                        </li>
                    </ul>
                </Card>

                <Card class="card">
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        友情社区
                    </p>
                    <a href="#" slot="extra" @click.prevent="changeLimit">
                        <Icon type="ios-loop-strong"></Icon>
                        换一换
                    </a>
                    <ul>
                        <li><a href="#">友情社区1</a></li>
                        <li><a href="#">友情社区2</a></li>
                        <li><a href="#">友情社区3</a></li>
                        <li><a href="#">友情社区4</a></li>
                    </ul>
                </Card>

            </i-col>

            <i-col span="2">&nbsp;</i-col>
        </Row>

    </div>
</template>

<script>
    export default{
        data() {
            return {
                movieList: [
                    {
                        name: '这个杀手不太冷',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: '霸王别姬',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: '千与千寻',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: '辛德勒的名单',
                        url: 'https://movie.douban.com/subject/1295124/',
                        rate: 9.4
                    },
                    {
                        name: '海上钢琴师',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },

                ],
                randomMovieList: []

            }
        },
        mounted() {
            this.changeLimit();
        },
        methods: {
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        }
    }
</script>

<style scoped>

    #container {
        width: 100%;
        height: 100%;
        font-size: 12px;
        background-color: #e7ecef;
    }

    #header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #000;
    }

    #header ul {

    }

    #header ul li {
        list-style: none;
        float: left;
        margin: 0 30px 0 0;


    }

    #header ul li a {
        font-size: 20px;
    }

    #recommend {
        margin: 10px 0;
    }

    #recommend .content {
        padding: 2px 4px 2px 20px;
        border: dashed 1px #f8cc7e;
        background: #fffce7 ;
        font: normal 12px/22px Arial;
    }

    #main {
        margin: 20px 0 0 0;
    }

    #main .article {
        border-bottom: 1px #ccc dashed;
        margin: 0 0 20px 0;
    }

    #main .article .title a {
        color: #000;
        font-size: 20px;
        font-weight: bold;
    }

    #main .article .introduction {
        font-size: 14px;
        color: #999;
        line-height: 24px;
    }

    #main .article ul {
        float: right;
    }

    #main .article ul li {
        list-style: none;
        float: left;
        margin-left: 16px;
        font-size: 10px;
    }

    #main .article ul li a {
        font-size: 10px;
    }

    .card {
        float: right;
        width: 300px;
        margin-bottom: 20px;
    }



</style>