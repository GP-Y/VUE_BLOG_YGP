<template>
  <div class="about">
    <div class="about_box">
      <div class="head_img">
        <img src="../assets/img02.jpg">
      </div>
      <div class="about_me">
        <h2>关于博主</h2>
        <p>昵称：阿贵</p>
        <p>年龄：24</p>
        <p>爱好：看书、运动、敲代码</p>
      </div>
      <div class="about_motto">
        <h2>博主格言</h2>
        <p>成功不是得到多少东西，而是把身上多余的东西的扔掉多少。</p>
      </div>
      <div class="about_fell">
        <h2>个人感悟</h2>
        <p>人生就是一个追逐的过程，为了自己的“梦想”，不停地奋斗，不停地努力，我享受那些为了自己的梦想去努力和奋斗的日子。我喜欢编程并对其产生了浓厚的兴趣，在编程这条道路上我不停的追逐...；我认为：不管学习什么东西，一定要有属于自己的“学习方法”、善于总结。如果盲目的去学习会浪费大量的时间，而且学得大多数还是没有用处的东西，到头来什么也没学会，因此打击自己的学习欲望。人的一生都在不断的学习，不管是技术也好，做人也罢，感谢那些曾经帮助过我的人，因为有你们我才会变得更好</p>
      </div>
      <div class="about_call">
        <h2>联系我</h2>
        <p>QQ：401179159</p>
        <p>vx：15976704992</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'about',
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .about{
    background: url(../assets/bg02.jpg);
  }
  .about_box{
    width: 60%;
    min-height: 800px;
    padding: 30px;
    margin: 45px auto 0px;
    background-color: white;
  }
  .head_img{
    width: 150px;
    margin: 20px auto;
  }
  .head_img img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    -webkit-transition: -webkit-transform 2s ease-out;
    -moz-transition: -moz-transform 2s ease-out;
    -o-transition: -o-transform 2s ease-out;
    -ms-transition: -ms-transform 2s ease-out;
  }
  .head_img img:hover {
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
  .about_box h2{
    padding: 10px;
    border-radius: 5px;
    border-left: solid 5px #e6e6e6;
  }
  .about_box p{
    padding-left: 5px;
    margin: 10px;
  }
  .about_fell p{
    line-height:40px;
  }
</style>
