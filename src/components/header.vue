<template>
	<div class="head_box">
    <img src="../assets/img04.jpg">
    <h2>袁先生的博客</h2>
    <div class="head_nav">
      <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          active-text-color="#67C23A"
          background-color="#606266"
          text-color="#fff"
          :router="true"
          style="height: 45px;">
          <el-menu-item index="/Home" style="height: 45px; line-height: 45px;">
            <i class="el-icon-s-home" style="color: white;"></i>首页
          </el-menu-item>
          <el-menu-item index="/Timeaxis" style="height: 45px; line-height: 45px;">
            <i class="el-icon-connection" style="color: white;"></i>时间轴
          </el-menu-item>
          <el-menu-item index="/Message" style="height: 45px; line-height: 45px;">
            <i class="el-icon-edit" style="color: white;"></i>留言板
          </el-menu-item>
          <el-menu-item index="/Aboutme" style="height: 45px; line-height: 45px;">
            <i class="el-icon-user-solid" style="color: white;"></i>关于我
          </el-menu-item>
          <el-menu-item index="/Login" style="height: 45px; line-height: 45px;">
            <i class="el-icon-s-custom" style="color: white;"></i>管理博客
          </el-menu-item>
        </el-menu>
      </div>
      <!-- <div class="Login">
        <router-link to="/Login">登录</router-link>
      </div> -->
	</div>
</template>

<script>
  export default {
      data() {
        return {
          activeIndex: '1',
        };
      },
    }
</script>

<style>
.head_box {
	width: 100%;
  height: 45px;
	background: #606266;
	position: fixed;
	top: 0;
	z-index:4;
}

@-webkit-keyframes rotation{
  from {
    -webkit-transform: rotate(0deg);
    }
  to {
    -webkit-transform: rotate(360deg);
    }
}
.head_box img{
  height: 45px;
  width: 45px;
  position: relative;
  left: 200px;
  border-radius: 50%;
  -webkit-transform: rotate(360deg);
  animation: rotation 4s linear infinite;
  -moz-animation: rotation 4s linear infinite;
  -webkit-animation: rotation 4s linear infinite;
  -o-animation: rotation 4s linear infinite;
}
.head_box h2{
  display: inline-block;
  color: white;
  position: relative;
  left: 210px;
  top: 6px;
}
.head_box .head_nav{
  float: right;
  position: relative;
  right: 200px;
}
.head_nav  .el-menu {
	background: transparent;
	border-bottom: none!important;
}
.head_nav .el-menu-item {
  width: 120px;
  text-align: center;
	border-bottom: none!important;
}
/* .Login {
  position: absolute;
  top: 12px;
  right: 80px;
}
.Login a{
  font-size: 15px;
  color: white;
}
.Login a:hover{
  color: #44cef6;
} */
</style>
