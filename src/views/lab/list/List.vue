<template>
  <div class="list">
    <div class="header">
      <h1>this is {{ componentName }} vue component</h1>
      <p>
        {{ msg }}
      </p>
      <div>
        <el-row type="flex" justify="end" :gutter="10">
          <el-col :span="4">
            <el-input v-model="searchData.searchText" clearable placeholder="搜索项"
            @keyup.native.enter="search" 
            @clear="search"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button @click="search">search</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-table :data="list">
      <el-table-column label="PageInfo" prop="pageInfo" 
        align="center" min-max="70"></el-table-column>
      <el-table-column label="Guid" prop="guid" 
        :show-overflow-tooltip="true"
        align="center" min-width="100"></el-table-column>
      <el-table-column label="Id" prop="id" align="center" min-width="100"></el-table-column>
      <el-table-column label="Name" prop="name" align="center" min-width="100"></el-table-column>
      <el-table-column label="Age" prop="age" align="center" min-width="100"></el-table-column>
    </el-table>
    <el-pagination 
      @current-change="pageSwitch"
      :total="total" :current-page="page" :page-size="pageSize"></el-pagination>
    <br />
    <el-button @click="sendPost">post</el-button>
  </div>
</template>

<script src="./list.ts" lang="ts"></script>

<style lang="stylus" scoped>
.list
  text-align center
</style>
