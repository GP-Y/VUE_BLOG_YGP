<template>
  <div class="home">
    <div class="home_content">
        <div class="lunbotu">
            <el-carousel :interval="3000" height="350px">
            <el-carousel-item v-for="(item,index) in lunbotuList" :key="index">
              <div class="lunbotu_img"><img :src="item.img" alt="图片加载失败"></div>
            </el-carousel-item>
            </el-carousel>
        </div>
        <div class="blog_box">
          <div class="box_right">
            <h3>我的博客</h3>
            <div class="blog_content">
              <transition-group enter-active-class="animated fadeInLeft">
              <div v-for="blog in reverseBlog.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  :key="blog.id"
                  class="blog">
                  <div class="title">
                    <span>
                      <el-tag effect="dark">{{ blog.label }}</el-tag><i class="el-icon-caret-right"></i>
                    </span>
                    <router-link :to="'/Details/'+blog.id">
                      {{blog.title}}
                    </router-link>
                  </div>
                  <div class="text">
                    <div class="image"><img :src="blog.url" alt="未插入图片"></div>
                    <div><p v-html="changeMarked(blog.content)"></p></div>
                  </div>
                  <div class="foot">
                    <p>
                      <i class="el-icon-time">&nbsp</i>{{blog.time}}&nbsp&nbsp
                      <router-link :to="'/Details/'+blog.id">阅读原文>></router-link>
                    </p>
                  </div>
              </div>
              </transition-group>
            </div>
            <el-pagination
                @current-change="currentChange"
                background
                :page-size="pagesize"
                layout="prev, pager, next"
                :total="blogs.length">
            </el-pagination>
          </div>
          <div class="box_left">
            <div id="calendar"></div>
            <div class="search">
              <el-input v-model="search" placeholder="请输入内容" size="small">
                <i
                  class="el-icon-search el-input__icon"
                  slot="suffix">
                </i>
              </el-input>
            </div>
            <div class="boke">
              <p>博客内容</p>
              <ul>
                <li v-for="blog in filterBlog">
                   <router-link :to="'/Details/'+blog.id">{{blog.title}}</router-link>
                </li>
              </ul>
            </div>
            <div class="tuijian">
              <p>资源推荐</p>
              <ul>
                <li><a href="https://www.cnblogs.com" target="_blank">1、博客园</a></li>
                <li><a href="https://www.zhihu.com" target="_blank">2、知乎</a></li>
                <li><a href="https://www.bootcdn.cn" target="_blank">3、BootCDN</a></li>
                <li><a href="https://cn.vuejs.org" target="_blank">4、vue.js</a></li>
                <li><a href="https://github.com" target="_blank">5、GitHub</a></li>
                <li><a href="https://element.eleme.cn" target="_blank">6、Element UI</a></li>
              </ul>
            </div>
            <div class="callme">
              <p>联系作者</p>
              <img src="../assets/me.jpg">
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import marked from 'marked';
  export default {
    name: 'home',
    data () {
      return {
        blogs:[],
        search:'',
        currentPage:1,
        pagesize:6,
        lunbotuList:[
          {img: require('../assets/l1.jpg')},
          {img: require('../assets/l2.jpg')},
          {img: require('../assets/l3.jpg')},
          {img: require('../assets/l4.jpg')}
        ],
      }
    },
    methods:{
      getBlog() {
        this.axios.get('/api/getBlog').then( (res) => {
          this.blogs = res.data;
        })
      },
      currentChange(currentPage){
        this.currentPage = currentPage;
      },
      changeMarked(parm){
        var value=marked(parm);
        if(value.length>120){
          return value.slice(0,140)+"...";
        }else{
          return value;
        }
      },
    },
    computed: {
      filterBlog(){
        return this.blogs.slice(0,7);
      },
      searchBlog(){
        return this.blogs.filter((blog)=>{
          return blog.title.match(this.search);
        })
      },
      reverseBlog(){
        return this.searchBlog.reverse();
      },
    },
    created() {
      this.getBlog();
    },
    mounted(){
      layui.use('laydate', function(){
        var laydate = layui.laydate;
        laydate.render({
          elem: '#calendar',
          position: 'static',
        });
      });
    }
  }
</script>

<style scoped>
  .home{
    width: 100%;
    background:  #e6e6e6;
  }
  .home_content{
    width: 1000px;
    padding: 35px;
    background: #f5f5f0;
    margin: 45px auto 0;
  }
  .lunbotu{
    width: 1000px;
    height: 350px;
  }
  .lunbotu .el-carousel__item .lunbotu_img {
    width:100%;
    height:350px;
  }
  .lunbotu_img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .blog_box{
    overflow: hidden;
    margin-top: 30px;
  }
  .blog_box .box_right{
    width: 675px;
    float: left;
  }
  .blog_box .box_right h3{
    width: 660px;
    height: 30px;
    margin: 0;
    background: white;
    padding: 10px 5px 0px 5px;
    border-left: solid 5px black;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  }
  .box_right .blog_content{
    width: 675px;
    min-height: 1250px;
  }
  .blog_content .blog{
    padding: 20px;
    padding-bottom: 15px;
    margin: 20px 0;
    border-radius: 5px;
    background: white;
  }
  .blog_content .blog:hover{
    background-color: rgba(96, 96, 96, 0.1);
  }
  .blog span{
    position: relative;
  }
  .blog .title .el-tag{
    width: 65px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.8);
  }
  .title .el-icon-caret-right{
    position: absolute;
    left: 58px;
    top: 1.5px;
    color: rgba(0, 0, 0, 0.8);
  }
  .title a{
    text-decoration: none;
    font-size: 20px;
    margin-left: 20px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
  }
  .blog .text{
    margin-top: 15px;
    width: 635px;
    height: 75px;
  }
  .text .image{
    float: left;
    width: 115px;
    height: 75px;
    overflow: hidden;
  }
  .text .image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s;
  }
  .text img:hover{
    transform: scale(1.4);
  }
  .text p{
    width: 495px;
    height: 75px;
    margin-left: 140px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.6);
  }
  .foot p{
    text-decoration: none;
    margin-top: 15px;
  }
  .foot a:hover{
    color: limegreen;
    text-decoration:underline
  }
  .box_left{
    width: 275px;
    float: left;
    margin-left: 50px;
  }
  .box_left p{
    width: 245px;
    font-size: 20px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.6);
  }
  .box_left .search{
    margin-top: 20px;
  }
  .box_left .boke{
    width: 275px;
    margin-top: 20px;
    padding: 15px;
    background: white;
  }
  .boke ul{
    margin-top: 20px;
    list-style: none;
  }
  .boke ul>li{
    width: 240px;
    margin-top: 10px;
    font-size: 15px;
    padding: 5px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.1);
  }
  .box_left .tuijian{
    width: 275px;
    height: 240px;
    margin-top: 20px;
    padding: 15px;
    background: white;
  }
  .tuijian ul{
    margin-top: 20px;
    list-style: none;
  }
  .tuijian ul>li{
    margin-top: 10px;
    font-size: 15px;
  }
  .tuijian a:hover{
    color: blue;
  }
  .box_left .callme{
    width: 275px;
    height: 280px;
    margin-top: 20px;
    padding: 15px;
    background: white;
  }
  .callme img{
    width: 245px;
    margin-top: 20px;
  }
</style>
