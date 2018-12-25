/**
 * axios被插件挂载到vue实例上, 这里做一个中转。
 * 直接暴露出可用的axios实例
 */
import Vue from 'vue';

export default Vue.$axios;
