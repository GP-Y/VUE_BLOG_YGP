<template>
  <div class="login">
    <div class="user">
      <h1>Login</h1>
      <div class="user_num">
        <p>账号:<el-input placeholder="请输入账号" v-model="number" clearable></el-input></p>
      </div>
      <div class="user_password">
        <p>密码:<el-input placeholder="请输入密码" v-model="password" show-password></el-input></p>
      </div>
      <div class="user_btn">
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'login',
    data(){
      return{
        number:'',
        password:'',
        user:'',
        flag:'true'
      }
    },
    methods:{
      login(){
        if(this.number==this.user.number&&this.password==this.user.password){
              var session=window.sessionStorage;
              var d=JSON.stringify(this.user);
              session.setItem('user',d);
              this.$router.push({path:'/Admin'});
            }else{
              alert("请检查账号或密码是否输入正确！")
            }
      },
      toAdmin(){
        if(window.sessionStorage.user){
          this.$router.push({path:'/Admin'});
        }
      }
    },
    created(){
      this.axios.get('/api/getUser').then( (res) => {
        this.user=res.data[0];
      });
    },
    mounted(){
      this.toAdmin();
    }
  }
</script>

<style scoped>
.login{
  width: 100%;
  height: 800px;
  background:url(../assets/img05.jpg) no-repeat;
  background-size:cover;
  position: absolute;
  z-index: 5;
}
.login .user{
  width: 300px;
  height: 250px;
  background: #75878a;
  position: absolute;
  top: 200px;
  right: 200px;
  padding: 20px;
}
.user h1{
  text-align: center;
}
.user .el-input{
  width: 250px;
}
.user .user_num{
  margin: 20px auto;
}
.user .user_btn{
  width: 200px;
  height: 40px;
  position: relative;
  left: 30px;
  margin-top: 20px;
}
.user_btn button{
  width: 250px;
  height: 40px;
  color: white;
  background:#003472;
  border: none;
}

</style>
