<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'LabHeader',
})
export default class IndexHeader extends Vue {
  private msg: string = 'This is Lab root';
}
</script>

<style lang="stylus" scoped>
H1
  text-align center
</style>

