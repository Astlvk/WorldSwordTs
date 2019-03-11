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
import RouteMap from '@/type/lab/RouteMap';
import { getModule } from 'vuex-module-decorators';
import UserState from '@/store/lab/User';

@Component({
  name: 'LabAsideMenu',
  components: {
    LabAsideMenuItem,
  },
})
export default class LabAsideMenu extends Vue {
  private get menus(): RouteMap[] {
    const menus = getModule(UserState).routeMap;
    return menus === null ? [] : menus;
  }
}
</script>

<style lang="stylus" scoped>
.el-menu
  border-right: 0px;
</style>

