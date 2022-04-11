<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-select v-model="query.address" placeholder="地址">
          <el-option key="1" label="前端" value=""></el-option>
          <el-option key="2" label="闲谈"></el-option>
          <el-option key="3" label="笔记"></el-option>
          <el-option key="4" label="技术"></el-option>
          <el-option key="5" label="生活"></el-option>
          <el-option key="6" label="设计"></el-option>
        </el-select>
        <el-input
          v-model="query.name"
          placeholder="用户名"
          class="handle-input mr10"
        ></el-input>
        <el-button type="primary" icon="el-icon-search" @click="handleSearch"
          >搜索</el-button
        >
      </div>
      <el-table
        :data="tableData"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column
          prop="id"
          label="ID"
          width="55"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="100"
        ></el-table-column>
        <el-table-column label="文章封面" align="center" width="100">
          <template #default="scope">
            <el-image class="table-td-thumb" :src="scope.row.url"> </el-image>
          </template>
        </el-table-column>
        <el-table-column label="内容"
          ><template v-slot:default="scope">{{
            scope.row.content.substring(0, 300)
          }}</template></el-table-column
        >
        <!-- <el-table-column label="状态" align="center" width="60">
          <template #default="scope">
            <el-tag
              :type="
                scope.row.state === '1'
                  ? 'success'
                  : scope.row.state === '0'
                  ? 'danger'
                  : ''
              "
              >{{ scope.row.state }}</el-tag
            >
          </template>
        </el-table-column> -->

        <el-table-column label="创建时间" width="90">
          <template v-slot:default="scope">{{
            day(scope.row.createtime)
          }}</template>
        </el-table-column>
        <el-table-column label="更新时间" width="90"
          ><template v-slot:default="scope">{{
            day(scope.row.updatetime)
          }}</template></el-table-column
        >
        <el-table-column label="操作" width="150" align="center">
          <template #default="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑
            </el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :current-page="query.pageIndex"
          :page-size="query.pageSize"
          :total="pageTotal"
          @current-change="handlePageChange"
        ></el-pagination>
      </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" v-model="editVisible" width="85%">
      <el-form label-width="70px" class="edit">
        <el-form-item label="id">
          <el-input
            v-model="form.id"
            width="20"
            type="number"
            style="width: 150px"
          ></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="form.title" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="文章封面">
          <el-input v-model="form.url" style="width: 800px"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <md-editor v-model="form.content" class="md" />
        </el-form-item>
        <!-- <el-form-item label="创建时间">
          <el-input v-model="form.createtime" style="width: 300px"></el-input>
        </el-form-item> -->
        <el-form-item class="block">
          <span>创建时间</span>
          <el-date-picker
            v-model="form.createtime"
            placeholder="Pick a day"
            format="YY-MM-DD HH:DD"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveEdit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import dayjs from "dayjs";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
// import { fetchData } from "../api/index";
// import axios from "axios";
// import Qs from "qs";

export default {
  name: "basetable",
  components: { MdEditor },
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
    };
  },
  mounted() {
    //Axios请求
    this.$http({
      method: "GET",
      url: "api/blog/list",
    }).then((response) => {
      this.tableData = response.data.data;
    });
  },
  methods: {
    day(time) {
      return dayjs(time).format("YY-MM-DD HH:DD");
    },
    post1() {
      this.$http({
        method: "post",
        url: "https://server.angoykeith.xyz",
        data: { title: this.form.title, content: "12" },
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        console.log(res.data);
      });
    },
  },
  setup() {
    const query = [];
    const tableData = ref([]);
    const pageTotal = ref(0);
    // 获取表格数据
    // 查询操作
    const handleSearch = () => {
      this.pageIndex = 1;
    };
    // 分页导航
    const handlePageChange = (val) => {
      this.pageIndex = val;
    };

    // 删除操作
    const handleDelete = (index) => {
      console.log(index);
      // 二次确认删除
      ElMessageBox.confirm("确定要删除吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          tableData.value.splice(index, 1);
          ElMessage.success("删除成功");
        })
        .catch(() => {});
    };

    // 表格编辑时弹窗和保存
    const editVisible = ref(false);
    let form = reactive({
      id: Number,
      title: String,
      content: String,
      url: String,
      createtime: Number,
      state: Number,
    });
    let id = Number;
    const handleEdit = (index, row) => {
      console.log("index", index, "row", row);
      id = index;
      Object.keys(form).forEach((item) => {
        form[item] = row[item];
      });
      editVisible.value = true;
    };
    const saveEdit = () => {
      Object.keys(form).forEach((item) => {
        tableData.value[id][item] = form[item];
        JSON.stringify(form);
      });
      // fetchData(form, "update");

      ElMessage.success(`修改ID为 ${form.id} 的文章成功`);
      editVisible.value = false;
    };

    return {
      query,
      tableData,
      pageTotal,
      editVisible,
      form,
      handleSearch,
      handlePageChange,
      handleDelete,
      handleEdit,
      saveEdit,
    };
  },
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}
.md {
  width: auto;
}
.handle-select {
  width: 120px;
}
.edit {
  flex-wrap: wrap;
  display: flex;
  width: auto;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: 0;
  padding: 0;
  width: 100px;
  height: 40px;
}
</style>
