<template>
  <div>
    <el-menu
      :default-active="$route.path"
      :router="true"
      class="el-menu-vertical-demo">
      <!-- <router-view name=""></router-view> -->
      <LabAsideMenuItem :menus="menus"></LabAsideMenuItem>
    </el-menu>
  </div>
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

  public created(): void {
    this.menus = this.getMenu();
  }

  public getMenu(): UserMenu[] {
    return userApi.getMenu();
  }
}
</script>
