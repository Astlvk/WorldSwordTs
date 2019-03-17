<template>
  <div>
    <h1>你好，世界</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
  name: 'RouterTest',
})
export default class RouterTest extends Vue {
  private created(): void {
    window.console.log('run....');
  }
}
</script>

