<template>
  <div>
    <div v-for="(menu, index) in menus" :key="index">
      <el-menu-item v-if="menu.children === null" :index="resolvePath(menu.path)">
        <svg-icon v-if="menu.icon !== null && menu.icon !== ''" 
          :name="menu.icon" class="icon"></svg-icon>
        <span>{{ menu.title }}</span>
      </el-menu-item>
      <el-submenu v-else :index="resolvePath(menu.path)">
        <template slot="title">
          <svg-icon v-if="menu.icon !== null && menu.icon !== ''" 
            :name="menu.icon" class="icon"></svg-icon>
          <span>{{ menu.title }}</span>
        </template>
        <template v-if="menu.children !== null">
          <LabAsideMenuItem :menus="menu.children" :basePath="resolvePath(menu.path)"></LabAsideMenuItem>
        </template>
      </el-submenu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import RouteMap from '@/type/lab/RouteMap';

@Component({
  name: 'LabAsideMenuItem',
})
export default class LabAsideMenuItem extends Vue {
  @Prop({type: Array, default: []})
  private menus!: RouteMap[];
  @Prop({type: String, default: ''})
  private basePath!: '';

  private created(): void {
    window.console.log(this.basePath);
  }

  private resolvePath(path: string): string {
    if (this.basePath !== '') {
      path = this.basePath + '/' + path;
    }
    return path;
  }
}
</script>

<style lang="stylus" scoped>
.icon
  margin-right: 7px;
</style>

