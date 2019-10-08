<template>
  <div class="blog_msg">
    <p>留言管理</p>
    <div class="table">
      <el-table :data="reverse.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      style="width: 100%">
        <el-table-column prop="msg" align="center" label="Content">
        </el-table-column>
        <el-table-column prop="time" align="center" label="Time">
        </el-table-column>
        <el-table-column align="center" label="Operation" width="200">
          <template slot-scope="scope">
            <el-button @click="setVisible(scope.row)" type="primary" size="small">删除</el-button>
            <el-dialog
                title="提示"
                width="35%"
                top="13vh"
                :visible.sync="Visible"
                :modal="flag"
                :show-close="flag"
                center>
                <span>确认删除这条留言吗？点击确认删除！！！</span>
                <span slot="footer" class="dialog-footer">
                <el-button @click="Visible=false">取 消</el-button>
                <el-button type="primary" @click="delMsg">确 定</el-button>
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
        :total="msgLigst.length">
    </el-pagination>
  </div>
</template>

<script>
  export default{
    name:'manage',
    data(){
      return{
        row:'',
        msgLigst:[],
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
      delMsg(){
        this.axios.post('./api/delNews',{msg:this.row.msg}).then( (res)=>{
          this.Visible=false;
          this.getNews();
        })
      },
      getNews(){
        this.axios.get('/api/getNews').then( (res) => {
          this.msgLigst = res.data;
        })
      }
    },
    computed: {
      reverse() {
        return this.msgLigst.reverse();
      },
    },
    created(){
      this.getNews();
    }
  }
</script>

<style scoped>
.blog_msg{
  width: 85%;
  margin: 0 auto;
}
.blog_msg p{
  width: 150px;
  height: 50px;
  margin: 0 auto;
  font-size: 30px;
}
.blog_msg .table{
  margin-top: 50px;
}
.blog_msg .el-pagination{
  width: 100px;
  margin: 10px auto;
}
</style>
