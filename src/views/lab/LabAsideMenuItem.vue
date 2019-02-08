<template>
  <div>
    <div v-for="(menu, index) in menus" :key="index">
      <el-menu-item v-if="menu.children === null || menu.children.length === 0" 
        :index="menu.path">
        <i v-if="menu.icon !== null && menu.icon !== ''" 
          :class="menu.icon"></i>
        <span>{{ menu.title }}</span>
      </el-menu-item>
      <el-submenu v-else :index="menu.path">
        <template slot="title">
          <i v-if="menu.icon !== null && menu.icon !== ''" 
            :class="menu.icon"></i>
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
