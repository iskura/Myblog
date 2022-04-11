<template>
  <div class="index">
    <div class="tipbox">
      <h1>{{ title }}</h1>
      <p>{{ info }}</p>
      <el-divider></el-divider>
    </div>
    <div class="avue-crud">
      <el-button @click.stop="editVisible = true">添加</el-button>
      <avue-crud
        :data="data"
        :option="option"
        v-model="datas"
        @row-del="rowDel"
        @refresh-change="refresh"
      >
        <template slot-scope="scope" slot="menu">
          <el-button
            type="text"
            size="small"
            class="none-border"
            icon="el-icon-edit-outline"
            @click.stop="handleEdit(scope.row)"
            >编辑
          </el-button>
          <el-button
            type="text"
            size="small"
            class="none-border"
            icon="el-icon-edit-outline"
            @click.stop="handleUpdateStatus(scope.row)"
            >{{ scope.row.status === 1 ? "禁用" : "启用" }}
          </el-button>
        </template>
      </avue-crud>
      <!-- 弹窗 -->
      <el-dialog
        title="编辑"
        :visible.sync="editVisible"
        width="40%"
        append-to-body
      >
        <el-form label-width="40px">
          <el-form-item label="名称" class="addTime">
            <el-input :value="forms[0].holidayName" clearable></el-input>
          </el-form-item>
          <el-row :gutter="10">
            <el-col :span="14">
              <span>日期{{ editInput.time }}</span
              ><el-date-picker
                class="stration"
                v-model="editInput.time"
                align="center"
                type="daterange"
                placeholder="选择日期"
                value-format="yyyy/MM/dd"
              >
              </el-date-picker
            ></el-col>
            <el-col :span="5"
              ><el-select
                v-model="editInput.type"
                clearable
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
            ></el-col>
            {{ editInput.type
            }}<el-col :span="3">
              <el-button @click="addTime">添加</el-button></el-col
            >
          </el-row>
          <avue-crud
            :data="forms"
            :option="option1"
            v-model="datas"
            @row-del="rowDel"
          >
          </avue-crud>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="editVisible = false">取 消</el-button>
            <el-button type="primary" @click="saveEdit">确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: "holiday",
  data() {
    return {
      title: "节假日管理",
      info: `通过节假日设定，将非上班时间段和节假日时间在案件处置用时中剔除，避免节假日休息的计时导致案件超时的情况发生。另外，用于设定考勤排班中的法定节假日。`,
      editInput: {
        time: [],
        type: "",
      },
      form: {},
      //带入内部curd的数据
      forms: [{ data: "", holidayName: "", vaction: "", status: "" }],
      // forms: [],
      //编辑按钮表单数据
      datas: {},
      editVisible: false,
      addTimeValue: "",
      value: "",
      //假日列表
      data: [
        {
          holidayName: "",
          holidayDate: "",
          workDate: "",
          status: 0,
        },
        // {
        // 	holidayName: '2022端午',
        // 	holidayDate: '2022-02-22 10:44:15',
        // 	workDate: '2023-10-22 12:11:22',
        // 	vaction: '2020/02/02,2020/02/07',
        // 	status: 1,
        // },
        // {
        // 	holidayName: '2022春节',
        // 	holidayDate: '2022-02-22 10:44:15',
        // 	workDate: '2023-10-22 12:11:22',
        // 	vaction: '2020/02/02,2020/02/07',
        // 	status: 1,
        // },
        // {
        // 	holidayName: '2022春节',
        // 	holidayDate: '2022-02-22 10:44:15',
        // 	holidayDate: '2023-10-22 12:11:22',
        // 	vaction: '2020/02/02,2020/02/07',
        // 	status: 0,
        // },
        // {
        // 	holidayName: '2022端午',

        // 	holidayDate: [],
        // 	holidayDate: [],
        // 	vaction: '2020/02/02,2020/02/07',
        // 	status: 1,
        // },
        // {
        // 	holidayName: '2022春节',
        // 	holidayStartDate: '2022-02-22 10:44:15',
        // 	holidayEndDate: '2023-10-22 12:11:22',
        // 	vaction: '2020/02/02,2020/02/07',
        // 	status: 1,
        // },
      ],
      //服务器获取
      records: [
        {
          id: 8,
          holidayName: "五一长假",
          year: "2022",
          holidayStatus: true,
          createUser: "1123598821738675201",
          createTime: "2022-02-22 10:28:24",
          updateTime: null,
          updateUser: null,
          isDeleted: false,
          holidayBills: [
            {
              id: 8,
              holidayType: 1,
              holidayInfoId: 8,
              holidayStartDate: "2022-02-22 15:45:36",
              holidayEndDate: "2023-10-22 12:11:22",
              createUser: "1123598821738675201",
              createTime: "2022-02-22 10:28:24",
              updateTime: "2022-02-22 10:28:24",
              updateUser: "1123598821738675201",
              isDeleted: false,
            },
            {
              id: 10,
              holidayType: 1,
              holidayInfoId: 8,
              holidayStartDate: "2022-02-22 15:45:37",
              holidayEndDate: "2023-10-22 12:11:22",
              createUser: 0,
              createTime: "2022-02-22 10:32:56",
              updateTime: "2022-02-22 10:32:58",
              updateUser: "1123598821738675201",
              isDeleted: false,
            },
          ],
          workHolidayBills: [
            {
              id: 11,
              holidayType: 2,
              holidayInfoId: 8,
              holidayStartDate: "2022-02-22 15:45:39",
              holidayEndDate: "2023-10-22 12:11:22",
              createUser: 0,
              createTime: "2022-02-22 10:33:49",
              updateTime: "2022-02-22 10:33:51",
              updateUser: "1123598821738675201",
              isDeleted: false,
            },
            {
              id: 12,
              holidayType: 2,
              holidayInfoId: 8,
              holidayStartDate: "2022-02-22 15:45:40",
              holidayEndDate: "2023-10-22 12:11:22",
              createUser: 0,
              createTime: "2022-02-22 10:38:36",
              updateTime: "2022-02-22 10:36:21",
              updateUser: "1123598821738675201",
              isDeleted: false,
            },
            {
              id: 13,
              holidayType: 2,
              holidayInfoId: 8,
              holidayStartDate: "2022-02-22 15:45:42",
              holidayEndDate: "2023-10-22 12:11:22",
              createUser: 0,
              createTime: "2022-02-22 10:43:20",
              updateTime: "2022-02-22 10:43:19",
              updateUser: "1123598821738675201",
              isDeleted: false,
            },
          ],
        },
      ],
      option: {
        editBtn: false,
        addBtn: false,
        column: [
          {
            label: "名称",
            prop: "holidayName",
            width: "120",
          },
          {
            label: "日期",
            prop: "holidayDate",
            format: "yyyy-MM-dd",
            width: "auto",
          },
          {
            label: "补班",
            prop: "vaction",
            format: "yyyy-MM-dd",
            width: "180",
            type: "daterange",
          },
          {
            label: "状态",
            prop: "status",
            width: "50",
            type: "select",
            addDisplay: false,
            dicData: [
              {
                label: "启用",
                value: 1,
              },
              {
                label: "禁用",
                value: 0,
              },
            ],
            formatter: (row) => {
              return row.status == 1 ? "启用" : "禁用";
            },
          },
        ],
      },
      option1: {
        editBtn: false,
        addBtn: false,
        refreshBtn: false,
        columnBtn: false,
        column: [
          {
            label: "类型",
            prop: "status",
            width: "50",
            dicData: [
              {
                label: "休假",
                value: 1,
              },
              {
                label: "补班",
                value: 0,
              },
            ],
            rules: [
              {
                required: true,
                message: "请选择用户平台",
                trigger: "blur",
              },
            ],
          },
          {
            label: "开始时间",
            prop: "holidayStartDate",
            format: "yyyy-MM-dd",
            width: "auto",
          },
          {
            label: "结束时间",
            prop: "holidayEndDate",
            format: "yyyy-MM-dd",
            width: "auto",
          },
        ],
      },
      options: [
        {
          value: 1,
          label: "休假",
        },
        {
          value: 0,
          label: "补班",
        },
      ],
    };
  },
  methods: {
    //编辑按钮
    handleEdit(row) {
      // this.forms = {};
      console.log("本行的值", row);
      this.forms[0].name = row.name;
      this.editVisible = true;
      // console.log('this.forms[0] ', this.forms[0]);
      // console.log('this.表单 ', this.datas);
      this.showof();
    },
    showof() {
      let holidaytime = this.records[0].holidayBills;
      let worktime = this.records[0].workHolidayBills;

      for (let i = 0; i < holidaytime.length; i++) {
        console.log("时间开始", holidaytime[i].holidayStartDate);
        console.log("时间结束", holidaytime[i].holidayEndDate);
      }
      for (let i = 0; i < worktime.length; i++) {
        console.log("上班开始", worktime[i].holidayStartDate);
        console.log("上班结束", worktime[i].holidayEndDate);
      }
    },
    //
    addTime() {
      this.data.splice(0, 0, this.form);
      this.forms.splice(0, 0, this.form);
      console.log("add", this.form);

      // this.form = {};

      console.log("qq", this.editInput.time);
      this.$message.success("添加成功");
    },
    //
    saveEdit(value) {
      this.editVisible = false;
      console.log(value);
      this.form = {};
      this.$message.success("确定", value);
      // Object.keys(this.form).forEach(item => {
      // 	this.data[value.$index][item] = this.form[item];
      // });
    },
    // 删除按钮
    rowDel(row, index) {
      this.$confirm(
        "是否删除该条信息？",
        `是否删除节假日(${row.holidayName})`,
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then(() => {
        this.data.splice(index, 1);
      });
    },
    //刷新
    refresh(val) {
      this.$message.success("刷新回调,当前分页对象" + JSON.stringify(val));
    },
    //改变状态
    handleUpdateStatus(row) {
      this.$confirm(
        `确定将“${row.holidayName}”${row.status == 1 ? "禁用" : "启用"}?`,
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then(() => {
        if (row.status == 1) {
          row.status = 0;
        } else row.status = 1;
      });
    },
  },
  computed: {
    infoData() {
      return this.form.info || [];
    },
  },
};
</script>

<style scoped lang="scss">
.index {
  margin-top: 12px;
  border-radius: 5px;
  background-color: #fff;
  padding: 15px;
  p {
    font-size: 15px;
  }
  .avue-crud {
    padding-top: 5px;
  }
}
</style>
