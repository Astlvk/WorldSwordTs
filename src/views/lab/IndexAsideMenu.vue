<template>
  <div>
    <el-menu
      default-active="1-3"
      class="el-menu-vertical-demo">
      <!-- <router-view name=""></router-view> -->
      <IndexAsideMenuItem></IndexAsideMenuItem>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IndexAsideMenuItem from './IndexAsideMenuItem.vue';

@Component({
  name: 'IndexAsideMenu',
  components: {
    IndexAsideMenuItem,
  },
})
export default class IndexAsideMenu extends Vue {}
</script>
