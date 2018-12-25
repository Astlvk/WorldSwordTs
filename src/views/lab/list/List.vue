<template>
  <div>
    <h1>this is vue component</h1>
    <p>
      {{ msg }}
    </p>
    <el-table :data="list">
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