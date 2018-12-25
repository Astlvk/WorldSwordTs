<template>
  <div>
      <el-container>
        <el-aside style="width: 20%">
          <router-view name="IndexAsideMenu"></router-view>
        </el-aside>
        <el-main>
          <el-header>
            <router-view name="IndexHeader"></router-view>
          </el-header>
          <router-view></router-view>
        </el-main>
      </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Lab',
})
export default class Index extends Vue {}
</script>
