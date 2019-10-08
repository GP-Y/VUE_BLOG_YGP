<template>

    <div class="footBack footBackQian">
        <div class="fcontainer">
            <p>博客已运行<span v-html='longTime'>{{longTime}}</span></p>
            <p>托管于<a href="https://github.com/YuanGuiPing/vueBlog.git" target="_blank">GitHub</a>.<a href="https://www.aliyun.com/?spm=a2c49.11131515.0.0.5Z9AkR" target="_blank">阿里云</a> 提供静态文件云存储服务. <a href="https://tongji.baidu.com/web/welcome/login" target="_blank">百度统计</a> 提供网站统计服务</p>
            <p>©粤ICP备18153756号 </p>
        </div>
  </div>

</template>

<script>
    export default {
        data() {
            return {
                longTime:'',
            }
        },
        methods: { //事件处理器
            runTime:function(){//运行倒计时
                var that = this;
                var oldTime =new Date('2019/08/27 00:00:00');
                var timer = setInterval(function(){
                    var nowTime = new Date();
                    var longTime = nowTime - oldTime;
                    var days = parseInt(longTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数
                      var hours = parseInt(longTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时
                      var minutes = parseInt(longTime / 1000 / 60 % 60, 10);//计算剩余的分钟
                      var seconds = parseInt(longTime / 1000 % 60, 10);//计算剩余的秒数
                      that.longTime = days+"天" + hours+"小时" + minutes+"分"+seconds+"秒";
                },1000)
            }
        },
        created() {
            var that = this;
            that.runTime();
        }
    }
</script>

<style>
.footBack{
    color:#888;
    margin-top: -10px;
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
    width:100%;
    min-height: 50px;
    margin-top:-25px;
    position: absolute;
}
.footBack .fcontainer{
    width:100%;
    background: #232323;
    padding:15px 10px 10px 10px;
    box-sizing: border-box;
    width: 100%!important;
}
.footBack p{
    margin:5px 0;
    z-index: 3;
}
.footBack a{
    color:#795548;
    z-index: 3;
}
.footBack a:hover{
    color:#000;
}
</style>
