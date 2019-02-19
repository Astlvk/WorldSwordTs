<template>
  <el-scrollbar style="height: 100%;">
    <el-menu
      :default-active="$route.path"
      :router="true"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <LabAsideMenuItem :menus="menus"></LabAsideMenuItem>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LabAsideMenuItem from './LabAsideMenuItem.vue';
import * as userApi from '@/data-api/lab/user-api';
import UserMenu from '@/entity/lab/UserMenu';

@Component({
  name: 'LabAsideMenu',
  components: {
    LabAsideMenuItem,
  },
})
export default class LabAsideMenu extends Vue {
  private menus: UserMenu[] = [];
  private test: string = 'hi wind';

  private created(): void {
    // this.menus = this.getMenu();
    this.getMenuByHttp();
  }

  private getMenu(): UserMenu[] {
    return userApi.getMenu();
  }

  private async getMenuByHttp(): Promise<void> {
   this.menus = await userApi.getMenuByHttp();
  }
}
</script>

<style lang="stylus" scoped>
.el-menu
  border-right: 0px;
</style>

