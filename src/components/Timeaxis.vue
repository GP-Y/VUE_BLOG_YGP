<template>
  <div class="time_axis">
    <div class="time_box">
      <div class="time_top">
        <h2>学无止境</h2>
        <p>不要轻易放弃。学习成长的路上，我们长路漫漫，只因学无止境。</p>
      </div>
      <div class="time_center">
        <div class="time_left">
          <el-timeline>
            <transition-group enter-active-class="animated fadeInUp">
            <el-timeline-item
                v-for="blog in reverseBlog" :key="blog.id"
                :timestamp="blog.time | filterTime"
                placement="top">
                <el-card>
                <h3><router-link :to="'/Details/'+blog.id">
                  {{blog.title}}
                </router-link></h3>
                <p>提交于 {{blog.time}}</p>
                </el-card>
            </el-timeline-item>
            </transition-group>
          </el-timeline>
        </div>
        <div class="time_right">
            <div class="right_img">
              <div class="img_box">
                <img src="../assets/img03.jpg">
              </div>
            </div>
            <div class="time_update">
              <h2>近期更新</h2>
              <ul>
              	<li v-for="blog in filterBlog">
                  <router-link
                    :to="'/Details/'+blog.id">
                    <i class="el-icon-reading"></i>{{blog.title}}
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="site_Info">
              <h2>站点信息</h2>
              <ul>
              	<li><h3>建站时间:</h3><span>2019年08月27日</span></li>
              	<li><h3>文章统计:</h3><span>共 {{total}} 篇文章</span></li>
              	<li><h3>标签管理:</h3><span><a href="javaScrapt:;">标签云</a></span></li>
              	<li><h3>统计数据:</h3><span><a href="javaScrapt:;">百度统计</a></span></li>
              	<li><h3>关于本站:</h3><span style="line-height: 20px;">此博客仅为了记录我学习中遇到的问题和生活中的一些所见所闻！前端后端都是本人搭建，网站前端主要用的是vue+webpack+axios+element-UI+vue-router等，后端主要用的是node+express框架和MySQL 等进行搭建，页面主要使用了静态布局。网站还存在很多不足的地方，本人今后还会继续对本站进行完善。</span></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeaxis',
  data() {
    return {
      bloglist:[],
      total:'',
    }
  },
  methods:{
    getBlog() {
      this.axios.get('/api/getBlog').then( (res) => {
        this.bloglist = res.data;
        this.total=this.bloglist.length;
      })
    },
  },
  computed: {
    reverseBlog() {
      return this.bloglist.reverse();
    },
    filterBlog(){
      return this.bloglist.slice(0,6);
    }
  },
  filters:{
    filterTime(value){
      return value.slice(0,10);
    }
  },
  created(){
    this.getBlog();
  }

}
</script>

<style scoped>
  .time_axis{
    width: 100%;
    background: #e6e6e6;
  }
  .time_box{
    width: 1000px;
    min-height: 1250px;
    padding: 30px;
    margin: 45px auto 0;
    background: #f5f5f0;
  }
  .time_top{
    overflow: hidden;
    margin-bottom: 25px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  }
  .time_top h2{
    float: left;
  }
  .time_top p{
    float: right;
    line-height: 35px;
  }
  .time_center{
    overflow: hidden;
  }
  .time_left{
    float: left;
  }
  .time_left .el-timeline{
    width: 660px;
  }
  .el-timeline .el-card h3{
    margin-bottom: 5px;
  }
  .time_right{
    width: 300px;
    min-height: 800px;
    float: right;
    margin-top: 20px;
  }
  .time_right .right_img{
    width: 300px;
    height: 180px;
    padding: 20px;
    background-color: white;
  }
  .right_img .img_box{
    width: 260px;
    height: 180px;
    overflow: hidden;
  }
  .img_box img{
    display: block;
    width: 100%;
    height: 100%;
    transition: all 1.5s;
  }
  .img_box img:hover{
    transform: scale(1.2);
  }
  .time_update{
    width: 258px;
    height: 250px;
    padding: 20px;
    margin-top: 20px;
    border: solid 1px rgba(0, 0, 0, 0.2);
    background-color: white;
  }
  .time_update h2{
    width: 260px;
    margin-bottom: 10px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.4);
  }
  .time_update li{
    border-radius: 5px;
  }
  .time_update li:hover{
    background: #3eede7;
  }
  .time_update a{
    line-height: 35px;
  }
  .time_update i{
    margin-left: 5px;
    margin-right: 20px;
  }
  .site_Info{
    width: 258px;
    min-height: 200px;
    padding: 20px;
    margin-top: 20px;
    border: solid 1px rgba(0, 0, 0, 0.2);
    background-color: white;
  }
  .site_Info h2{
    width: 260px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.4);
  }
  .site_Info li{
    list-style: none;
    display: block;
    margin-top: 10px;
  }
  .site_Info h3{
    display: inline-block;
    font-weight: bold;
    margin-right: 10px;
  }
  .site_Info a{
    color: #4b5cc4;
  }
  .site_Info a:hover{
    text-decoration: underline;
  }
</style>
