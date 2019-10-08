<template>
  <div class="details">
    <div class="blog_content">
      <div class="detail_top">
        <h1>{{blog.title}}</h1>
        <p>文章<span>{{blog.time}}</span>
          <i class="el-icon-view">15</i>
          <i class="el-icon-s-custom"> {{blog.author}}</i>
        </p>
      </div>
      <div class="content">
        <pre  id="mystyle" v-highlight v-html="content"></pre>
      </div>
    </div>
  </div>
</template>

<script>
  import marked from 'marked';
  import 'highlight.js/styles/atom-one-dark.css';
  import hljs from 'highlight.js';

  export default {
    name: 'Detail',
    data() {
      return {
        blog:'',
        content:'',
        id:this.$route.params.id
      }
    },
    methods:{
      getValue(){
        this.axios.get('/api/getValue',{
           params: {id: this.id}
        }).then( (res) => {
          this.blog=res.data[0];
          this.content = marked(this.blog.content)
        })
      }
    },
    directives:{
      highlight:((el) =>{
          let blocks = el.querySelectorAll('pre code');
          blocks.forEach((block) => {
              hljs.highlightBlock(block)
          })
      })
    },
    created(){
      this.getValue();
    }
  }
</script>

<style scoped>
  .details{
    margin-top: 45px;
    width: 100%;
    min-height: 800px;
    background:  #e6e6e6;
  }
  .blog_content{
    width: 900px;
    min-height: 800px;
    margin: auto;
    padding: 20px;
    background: url(../assets/bg01.jpg);
  }
  .detail_top p{
    margin-top: 20px;
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.6);
    border-bottom: solid 1px black;
  }
  .detail_top p span{
    margin-left: 15px;
  }
  .detail_top p i{
    margin-left: 15px;
  }
  .content{
    padding: 15px;
  }
  #mystyle {

    font-size: 18px;
    font-family: 宋体 ;
  }
</style>
