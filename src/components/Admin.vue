<template>
  <div class="admin">
    <div class="ad_head">
      <h3>博客后台管理</h3>
      <img src="../assets/img04.jpg">
      <p>欢迎您! {{user}} <button @click="clearSession">退出</button></p>
    </div>
    <div class="ad_nav">
      <ul>
        <li>站点综合管理</li>
        <li><router-link to="/Admin/ManageBlog">博客管理</router-link></li>
        <li><router-link to="/Admin/ManageMsg">留言管理</router-link></li>
        <li><router-link to="/Admin/BuildBlog">添加博客</router-link></li>
        <li><router-link to="/Home">返回首页</router-link></li>
      </ul>
    </div>
    <div class="ad_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default{
    name:'admin',
    data(){
      return{
        user:''
      }
    },
    methods:{
      clearSession(){
        sessionStorage.clear();
        this.$router.push({path:'/Home'});
      },
    },
    created(){
      this.axios.get('/api/getUser').then( (res) => {
        this.user=res.data[0].number;
      });
    },
  }
</script>

<style scoped>
  .admin{
    width: 100%;
    height: 700px;
    background: white;
    position: absolute;
    z-index: 5;
  }
  .ad_head{
    width: 100%;
    height: 45px;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .ad_head h3{
    width: 150px;
    height: 45px;
    line-height: 45px;
    margin-left: 50px;
    color: #0c8918;
  }
  .ad_head img{
    position: relative;
    float: right;
    top: -40px;
    right: 300px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }
  .ad_head p{
    position: relative;
    float: right;
    top: -42px;
    right: 20px;
    height: 45px;
    color: #c2ccd0;
    line-height: 45px;
  }
  .ad_head button{
    margin-left: 15px;
    border: none;
    color: #c2ccd0;
    background: rgba(0, 0, 0, 0.8);
  }
  .ad_head button:hover{
    color: #177cb0;
  }
  .ad_nav{
    width: 15%;
    min-height: 600px;
    float: left;
    padding: 40px 0;
    color: #c2ccd0;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .ad_nav li{
    list-style: none;
    margin-bottom: 20px;
    margin-left: 40px;
  }
  .ad_nav li>a{
    color: #c2ccd0;
  }
  .ad_nav li>a:hover{
    color: #00bc12;
  }
  .ad_content{
    width: 85%;
    min-height: 600px;
    float: right;
  }
</style>
