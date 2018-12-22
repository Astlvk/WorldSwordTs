<template>
  <div>
    <el-container>
      <el-header>
        <h1>{{ msg }}</h1>
      </el-header>
      <el-container>
        <el-aside style="width: 25%">
          <router-view name="IndexAsideMenu"></router-view>
        </el-aside>
        <el-main>
          <router-view></router-view>
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
export default class Index extends Vue {
  private msg: string = 'This is Lab root';
}
</script>
