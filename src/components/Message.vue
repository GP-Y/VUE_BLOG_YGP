<template>
  <div class="message">
    <div class="msg_box">
      <h1>留言</h1><span>你，我生命中一个重要的过客，我们之所以是过客，因为你未曾会为我停留。</span>
      <div class="msg">
        <textarea v-model="msg" placeholder="留下想对我说的话,我们就会有故事 !"/>
        <el-button :plain="true" @click="myclick">发表留言</el-button>
        <div class="msg_content">
          <div v-for="(item,index) in reverseData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            class="msglist">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <h3>匿名读友</h3><span style="color: rgba(0,0,0,0.5);">{{item.time}}</span>
            <p>{{item.msg}}</p>
          </div>
        </div>
          <el-pagination
              @current-change="currentChange"
              background
              :page-size="pagesize"
              layout="prev, pager, next"
              :total="msglist.length">
          </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'message',
    data(){
      return{
        msg:'',
        time:'',
        msglist:[],
        currentPage:1,
        pagesize:5,
        format:'yyyy-MM-dd hh:mm:ss'
      }
    },
    computed: {
      reverseData() {
        return this.msglist.reverse();
      }
    },
    created(){
      this.getmsg();
    },
    methods:{
      myclick(){
        if(this.msg==''){
          this.tips();
        }else{
          this.getTime();
          this.postmsg();
        }
      },
      currentChange(currentPage){
        this.currentPage = currentPage;
      },
      postmsg(){
        this.axios.post('/api/postNews', {
          msg:this.msg,
          time:this.time
        }).then( (res) => {
          this.success();
          this.getmsg();
          this.msg='';
        });
      },
      getmsg(){
        this.axios.get('/api/getNews').then( (res) => {
          this.msglist=res.data;
        });
      },
      tips(){
        this.$message({
          duration:'1000',
          center:'true',
          message: '未输入内容，请输入！！！',
          type: 'warning'
        });
      },
      success(){
        this.$message({
          duration:'1000',
          center:'true',
          message: '恭喜你，留言提交成功！',
          type: 'success'
        });
      },
      getTime(){
          var format=this.format;
          this.time=this.dateFormat(format)
        },
        dateFormat(format){
          var date=new Date();
          var y = (date.getFullYear()).toString().padStart(2,'0');
          var m = (date.getMonth() + 1).toString().padStart(2,'0');
          var d = (date.getDate()).toString().padStart(2,'0');
          if (format.toLowerCase() === 'yyyy-mm-dd') {
            return `${y}-${m}-${d}`
          }else {
            var hh = (date.getHours()).toString().padStart(2,'0');
            var mm = (date.getMinutes()).toString().padStart(2,'0');
            var ss = (date.getSeconds()).toString().padStart(2,'0');
            return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
          }
        }
    },
  }
</script>

<style scoped>
  .message{
    background: #e6e6e6;
  }
  .msg_box{
    width: 60%;
    margin: 45px auto 0;
    padding: 30px;
    background: url(../assets/bg02.jpg);
  }
  .msg_box h1{
    display: inline-block;
    margin-right: 50px;
  }
  .msg_box .msg_content{
    width: 100%;
    min-height: 600px;
  }
  .msg{
    min-height: 800px;
    margin: 0 auto;
    padding: 35px;
    border-top: solid 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background: white;
  }
  .msg .el-button{
    width: 100px;
    height: 35px;
    border: none;
    border-radius: 20px;
    background: limegreen;
    color: white;
    margin-top: 5px;
  }
  .msg textarea{
    width: 98%;
    height: 140px;
    border: none;
    padding: 10px;
    resize:none;
    background: #e6e6e6;
    border-radius: 8px;
  }
  .msg .msglist{
    height: 60px;
    margin-top: 20px;
    padding: 20px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);

  }
  .el-avatar{
    float: left;
    margin-top: 5px;
    margin-right: 15px;
  }
  .msglist h3{
    display: inline-block;
    margin-right: 5px;
  }
  .msglist p{
    margin-top: 10px;
  }
</style>
