<template>
	<svg class="svg-icon" aria-hidden="true">
		<use :xlink:href="iconName"></use>
	</svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'SvgIcon',
})
export default class SvgIcon extends Vue {
  @Prop({type: String, required: true})
  private name!: string;

  public get iconName(): string {
    return `#icon-${this.name}`;
  }
}
</script>

<style lang="css" scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>
