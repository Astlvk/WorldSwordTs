<template>
  <div>
    <el-menu
      default-active="1-3"
      class="el-menu-vertical-demo">
      <!-- <router-view name=""></router-view> -->
      <LabAsideMenuItem></LabAsideMenuItem>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LabAsideMenuItem from './LabAsideMenuItem.vue';

@Component({
  name: 'LabAsideMenu',
  components: {
    LabAsideMenuItem,
  },
})
export default class LabAsideMenu extends Vue {}
</script>
