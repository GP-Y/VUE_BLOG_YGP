<template>
  <div class="add_blog">
    <div class="add_box">
      <div class="image"></div>
      <div class="blog">
        <h2>添加博客</h2>
        <form>
          <label>博客标题</label>
          <input type="text" v-model="title" />
          <label >博客内容</label>
          <textarea v-model="content"></textarea>
          <div id="radio">
            <label >博客类型：</label>
            <input type="radio" name="lab" value="技术" v-model="label">
            <label>技术</label>
            <input type="radio" name="lab" value="生活" v-model="label">
            <label>生活</label>
            <input type="radio" name="lab" value="趣闻" v-model="label">
            <label>趣闻</label>
            <input type="radio" name="lab" value="爱好" v-model="label">
            <label>爱好</label>
          </div>
          <label>图片:</label>
          <input type="text" v-model="url" placeholder="亲,输入图片地址哦"/>
          <button @click.prevent="myclick">发布</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'add',
    data(){
      return{
        id:'',
        title:'',
        content:'',
        label:'',
        url:'',
        time:'',
        flag:'true',
        format:'yyyy-MM-dd hh:mm:ss'
      }
    },
    methods:{
      myclick(){
        if(window.sessionStorage.user){
          this.getTime();
          this.postBlog();
          this.$router.push({path:'/Home'})
        }else{
          alert("请登录后再进行操作");
        }
      },
      postBlog(){
        this.axios.post('/api/postBlog', {
          id:this.id,
          title:this.title,
          content:this.content,
          label:this.label,
          url:this.url,
          time:this.time
        }).then( (res) => {
          this.flag=false;
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
        },
    },
    created(){
      this.axios.get('/api/getBlog').then( (res) => {
        this.id=res.data.length+1;
      });
    }
  }
</script>

<style scoped>
  .add_blog{
    padding-top: 38px;
    background: url(../assets/bg02.jpg);
  }
  .add_box{
    width: 60%;
    min-height: 800px;
    padding: 30px;
    background: white;
    margin: 0 auto;
  }
  .add_box .image{
    width: 100%;
    height: 350px;
    background: url(../assets/img06.png) no-repeat;
    background-size: cover;
  }
  .add_box .blog{
    margin: 40px auto 0px;
    max-width: 600px;
    padding-bottom: 200px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"],textarea{
    display:block;
    width: 100%;
    padding: 8px;
    resize:none;
    border: solid 1px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  textarea{
    height: 200px;
  }
  #radio label{
    display: inline-block;
    margin-top: 0px;
  }
  #radio input{
    display: inline-block;
    margin-top: 10px;
  }
  button{
    margin-top: 25px;
    width: 80px;
    height: 30px;
    background-color: darkgray;
    border: none;
    border-radius: 4px;
  }
</style>
