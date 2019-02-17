<template>
  <div>
      <el-container>
        <el-aside width="200px" class="aside-container">
          <router-view name="LabAsideMenu"></router-view>
        </el-aside>
        <el-container class="main-container">
          <el-header>
            <router-view name="LabHeader"></router-view>
          </el-header>
          <el-main>
            <router-view name="LabContainer"></router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Lab',
})
export default class Lab extends Vue {}
</script>

<style lang="stylus" scoped>
aside-width = 200px;
.main-container
  height: 100vh;
  margin-left: aside-width;
.aside-container
  background-color: #545c64;
  -webkit-transition: width .28s;
  transition: width .28s;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  // overflow: hidden;
</style>

