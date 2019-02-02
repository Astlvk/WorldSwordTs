<template>
  <div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      <el-submenu index="1-4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>选项4</span>
        </template>
        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'IndexAsideMenuItem',
})
export default class IndexAsideMenuItem extends Vue {}
</script>
