<template>
  <div>
      <el-container>
        <el-aside width="20%">
          <router-view name="LabAsideMenu"></router-view>
        </el-aside>
        <el-main>
          <el-header>
            <router-view name="LabHeader"></router-view>
          </el-header>
          <router-view name="LabContainer"></router-view>
        </el-main>
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
.aside-container
    -webkit-transition: width .28s;
    transition: width .28s;
    width: 20%;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
</style>

