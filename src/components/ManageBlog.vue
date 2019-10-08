<template>
  <div class="manage">
    <p>博客管理</p>
    <div class="table">
      <el-table :data="reverse.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      style="width: 100%">
        <el-table-column prop="id" align="center" label="Id" width="80">
        </el-table-column>
        <el-table-column prop="title" align="center" label="Title">
        </el-table-column>
        <el-table-column prop="label" align="center" label="Type" width="140">
        </el-table-column>
        <el-table-column prop="time" align="center" label="Time">
        </el-table-column>
        <el-table-column align="center" label="Operation" >
          <template slot-scope="scope">
            <el-button type="primary" size="small"><router-link :to="'/Admin/EditBlog/'+scope.row.id">编辑</router-link></el-button>
            <el-button @click="setVisible(scope.row)" type="danger" size="small">删除</el-button>
            <el-dialog
                title="提示"
                width="35%"
                top="13vh"
                :visible.sync="Visible"
                :modal="flag"
                :show-close="flag"
                center>
                <span>确认删除这条博客吗？点击确认删除！！！</span>
                <span slot="footer" class="dialog-footer">
                <el-button @click="Visible=false">取 消</el-button>
                <el-button type="primary" @click="delBlog">确 定</el-button>
                </span>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
        @current-change="currentChange"
        background
        :page-size="pagesize"
        layout="prev, pager, next"
        :total="blogLigst.length">
    </el-pagination>
  </div>
</template>

<script>
  export default{
    name:'manage',
    data(){
      return{
        row:'',
        blogLigst:[],
        currentPage:1,
        pagesize:6,
        flag:false,
        Visible: false
      }
    },
    methods:{
      currentChange(currentPage){
        this.currentPage = currentPage;
      },
      setVisible(row){
        this.Visible=true;
        this.row=row;
      },
      delBlog(){
        this.axios.post('./api/delBlog',{id:this.row.id}).then( (res)=>{
          this.Visible=false;
          this.getBlog();
        })
      },
      getBlog(){
        this.axios.get('/api/getBlog').then( (res) => {
          this.blogLigst = res.data;
        })
      }
    },
    computed: {
      reverse() {
        return this.blogLigst.reverse();
      },
    },
    created(){
      this.getBlog();
    }
  }
</script>

<style scoped>
.manage{
  width: 85%;
  margin: 0 auto;
}
.manage p{
  width: 150px;
  height: 50px;
  margin: 0 auto;
  font-size: 30px;
}
.manage .table{
  margin-top: 50px;
}
.manage .el-pagination{
  width: 100px;
  margin: 10px auto;
}
</style>
