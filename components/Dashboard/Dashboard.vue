<template>
  <x-layout :showTitle="false">
    <div slot="nav" class="module-wrapper">
      <div v-for="(group,index) in modules" :key="index" class="module-group">
        <div class="module-title">{{group.groupName}}</div>
        <ul>
          <li v-for="(item,idx) in group.list" :key="idx" class="m-item">
            <a-icon class="m-icon" :type="item.icon"/>
            <p class="m-name">{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div slot="content" class="dashboard">
      <a-row :gutter="15" class="card-row">
        <a-col :span="12">
          <a-card title="待办" :loading="loading">
            <a href="#" slot="更多">more</a>
            <p>card content</p>
            <p>card content</p>·`````
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="工作提醒" :loading="loading">
            <a href="#" slot="更多">more</a>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="15" class="card-row">
        <a-col :span="12">
          <a-card title="保前项目跟踪" :loading="loading">
            <a href="#" slot="更多">more</a>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="上会项目" :loading="loading">
            <a href="#" slot="更多">more</a>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="30" class="card-row">
        <a-col>
          <a-card title="项目跟踪" :loading="loading">
            <a href="#" slot="更多">more</a>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </x-layout>
</template>

<script>
export default {
  name: "x-dashboard",
  data() {
    return {
      loading: true,
      modules: [
        {
          groupName: "业务",
          list: [
            { key: 1, name: "客户管理", icon: "bar-chart", url: "/index" },
            { key: 2, name: "担保项目", icon: "project", url: "/dashboard" },
            { key: 3, name: "风险管理", icon: "area-chart" },
            { key: 4, name: "合规管理", icon: "switcher" },
            { key: 5, name: "委贷管理", icon: "usergroup-add" },
            { key: 6, name: "查询统计", icon: "usergroup-add" },
            { key: 7, name: "查询统计", icon: "area-chart" }
          ]
        },
        {
          groupName: "办公",
          list: [
            { key: 8, name: "审批", icon: "audit" },
            { key: 9, name: "投票", icon: "solution" }
          ]
        },
        {
          groupName: "财务",
          list: [
            { key: 10, name: "财务管理", icon: "money-collect" },
            { key: 11, name: "项目绩效", icon: "stock" }
          ]
        },
        {
          groupName: "系统",
          list: [{ key: 12, name: "设置", icon: "setting" }]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.dashboard {
  padding: 15px 30px 15px 15px;
  margin: 0 -15px;
  background: #f1f2f7;
}
.card-row {
  margin-bottom: 15px;
}

.module-wrapper {
  display: inline-block;
  height: 100%;
  width: 220px;
  overflow-y: auto;
  overflow-x: hidden;
}

.module-group {
  max-width: 200px;
  .module-title {
    position: relative;
    width: 170px;
    line-height: 30px;
    font-size: 14px;
    font-weight: 700;
    padding-left: 10px;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .module-title::after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid rgb(196, 196, 196);
  }

  ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .m-item {
    list-style: none;
    float: left;
    width: 100px;
    padding-bottom: 5px;
    text-align: center;
    .m-icon {
      font-size: 24px;
      color: #c6281f;
    }
    .m-name {
      font-size: 13px;
    }
  }
}
</style>
