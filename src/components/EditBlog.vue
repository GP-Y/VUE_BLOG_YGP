<template>
  <div class="build">
    <h2>修改博客</h2>
    <p>提示！在这里您可以修改你的博客</p>
    <div class="blog_box">
      <span>博客标题：
        <el-input v-model="title" size="small" maxlength="20" placeholder="标题必填, 限定20字以内" style="width: 400px;"></el-input>
      </span>
      <span>博客类型：
        <el-select v-model="label" placeholder="请选择" size="small" style="width: 150px;">
          <el-option
            v-for="item in option1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </span>
      <span>博客封面：
        <el-input v-model="url" size="small" placeholder="请输入内容, url地址" style="width: 250px;"></el-input>
      </span>
      <span>博客标签：
        <el-select
          v-model="tag"
          multiple
          filterable
          allow-create
          size="small"
          default-first-option
          placeholder="请选择博客标签, 可输入">
          <el-option
            v-for="item in option2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </span>
      <span>正文内容：</span>
      <div class="blog_edit">
         <mavon-editor v-model="content" class="edit"></mavon-editor>
      </div>
      <span>本文作者：
        <el-input v-model="author" size="small" style="width: 200px;"></el-input>
      </span>
      <span style="display: inline-block;">博客标识：
        <el-input v-model="id" size="small" style="width: 100px;" placeholder="设置本文id" disabled></el-input>
      </span>
      <el-button type="primary" round @click="myclick">提 交</el-button>
    </div>
  </div>
</template>

<script>
  export default{
    name:'build',
    data(){
      return{
        title:'',
        label: '',
        url:'',
        tag:[],
        content:'',
        author:'',
        id:this.$route.params.id,
        blog:'',
        format:'yyyy-MM-dd hh:mm:ss',
        option1: [
          {value: '技术',label: '技术'},
          {value: '生活',label: '生活'},
          {value: '趣闻',label: '趣闻'},
          {value: '爱好',label: '爱好'},
          ],
        option2: [
          {value: 'HTML',label: 'HTML'},
          {value: 'CSS',label: 'CSS'},
          {value: 'JavaScript',label: 'JavaScript'},
          {value: 'vue',label: 'vue'},
          ],
      }
    },
    methods:{
      myclick(){
        this.toStr();
        this.updata();
      },
      updata(){
        this.axios.post('/api/updBlog', {
          id:this.id,
          tag:this.tag,
          url:this.url,
          time:this.time,
          title:this.title,
          label:this.label,
          author:this.author,
          content:this.content,
        }).then( (res) => {
          this.$router.push({path:'/Admin/ManageBlog'});
        });
      },
      toStr(){
        this.tag=this.tag.join(',');
      },
      toArr(){
        this.tag=this.blog.tag.split(',');
        return this.tag;
      },
      getValue(){
        this.axios.get('/api/getValue',{
           params: {id: this.id}
        }).then( (res) => {
          this.blog=res.data[0];
          this.setValue();
        })
      },
      setValue(){
        this.tag=this.toArr();
        this.url=this.blog.url;
        this.time=this.blog.time;
        this.title=this.blog.title;
        this.label=this.blog.label;
        this.author=this.blog.author;
        this.content=this.blog.content;
      }
    },
    created(){
      this.getValue();
    }
  }
</script>

<style scoped>
.build{
  width: 85%;
  height: 675px;
  position: absolute;
  top:45px;
  background: url(../assets/img07.jpg) no-repeat;
  background-size: cover;
}
.build h2{
  margin-left: 15px;
  line-height: 50px;
  border-bottom: solid 1px #e9e7ef;
}
.build p{
  margin-top: 10px;
  margin-left: 15px;
  padding-left: 10px;
  line-height: 30px;
  background-color: #e9f1f6;
}
.build .blog_box{
  margin-left: 50px;
}
.blog_box span{
  display: block;
  margin-top: 20px;
}
.blog_box .blog_edit{
  position: relative;
  top: -15px;
  width: 70%;
  height: 200px;
  margin-left: 80px;
}
.blog_box .edit{
  width: 100%;
  height: 100%;
  min-height: 200px;
}
.blog_box .el-button{
  width: 100px;
  margin-left: 300px;
}
</style>
