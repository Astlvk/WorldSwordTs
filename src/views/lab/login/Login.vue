<template>
  <div class="login-container">
    <div class="login-form">
      <el-form ref="loginForm" :model="user" >
        <div>
          <h3 class="title">Sign In System</h3>
        </div>
        <el-form-item>
          <el-input v-model="user.name">
            <span slot="prefix" class="svg-container">
              <svg-icon name="user" />
            </span>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input :type="passwordType" v-model="user.password">
            <span slot="prefix" class="svg-container">
              <svg-icon name="password" />
            </span>
            <span slot="suffix" class="svg-container" @click="showPassword">
              <svg-icon :name="iconName" />
            </span>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;">Log In</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" src="./Login.ts">
</script>

<style rel="stylesheet/styl" lang="stylus" scoped>
.login-container
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
.login-form
  width: 520px;
  padding: 160px 35px 0;
  margin: 0 auto;
.title
  font-size: 27px; 
  text-align: center;
  color: #eeeeee;
.svg-container
  padding: 3px;
</style>
