<template>
  <div>
    <div v-for="(menu, index) in menus" :key="index">
      <el-menu-item v-if="menu.children === null || menu.children.length === 0" 
        :index="menu.path">
        <svg-icon v-if="menu.icon !== null && menu.icon !== ''" 
          :name="menu.icon" class="icon"></svg-icon>
        <span>{{ menu.title }}</span>
      </el-menu-item>
      <el-submenu v-else :index="menu.path">
        <template slot="title">
          <svg-icon v-if="menu.icon !== null && menu.icon !== ''" 
            :name="menu.icon" class="icon"></svg-icon>
          <span>{{ menu.title }}</span>
        </template>
        <template v-if="menu.children !== null && menu.children.length > 0">
          <LabAsideMenuItem :menus="menu.children"></LabAsideMenuItem>
        </template>
      </el-submenu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import UserMenu from '@/entity/lab/UserMenu';

@Component({
  name: 'LabAsideMenuItem',
})
export default class LabAsideMenuItem extends Vue {
  @Prop({type: Array, default: []})
  private menus!: UserMenu[];

  public created(): void {
    // window.console.log(this.menus);
  }
}
</script>

<style lang="stylus" scoped>
.icon
  margin-right: 7px;
</style>

