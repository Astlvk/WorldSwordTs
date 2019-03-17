<template>
  <div class="header">
    <!-- <h1>
      {{ msg }}
    </h1> -->
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/40/h/40" class="user-avatar">
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              A
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>
              B
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">logout</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { logout } from '@/data-api/lab/user-api';
import UserState from '@/store/lab/User';
import { getModule } from 'vuex-module-decorators';

@Component({
  name: 'LabHeader',
})
export default class LabHeader extends Vue {
  private msg: string = 'This is Lab root';

  /**
   * 退出
   */
  private async logout(): Promise<void> {
    const userState = getModule(UserState);
    const token = userState.token;
    try {
      const res = await logout(token!);
      userState.SET_TOKEN(null);
      sessionStorage.removeItem('lab-token');
      this.$router.push('/lab/login');
    } catch (error) {
      window.console.log(error);
      this.$message.error(JSON.stringify(error));
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  overflow: hidden;
  padding: 7px 0;
  border-bottom: 1px solid #d8dce5;
H1
  text-align center
a, a:focus, a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}  
.right-menu {
  float: right;
  height: 100%;
  // line-height: 50px;

  &:focus {
    outline: none;
  }

  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;
    
    &.hover-effect {
      cursor: pointer;
      transition: background .3s;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  }

  .avatar-container {
    margin-right: 30px;

    .avatar-wrapper {
      margin-top: 5px;
      position: relative;

      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }

      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

