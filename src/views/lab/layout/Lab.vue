<template>
  <div>
      <el-container>
        <el-aside width="200px" class="aside-container">
          <LabAsideMenu name="LabAsideMenu"></LabAsideMenu>
        </el-aside>
        <el-container class="main-container">
          <el-header>
            <LabHeader name="LabHeader"></LabHeader>
          </el-header>
          <el-main>
            <LabContainer name="LabContainer"></LabContainer>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LabHeader from './LabHeader.vue';
import LabAsideMenu from './LabAsideMenu.vue';
import LabContainer from './LabContainer.vue';

@Component({
  name: 'Lab',
  components: {
    LabAsideMenu,
    LabHeader,
    LabContainer,
  }
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

