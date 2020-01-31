<template>
    <button
      class="el-button"
      :class="[
        type ? `el-button--${type}` : '',
        plain ? 'is-plain' : '',
        round ? 'is-round' : '',
        circle ? 'is-circle' : '',
        icon ? 'is-icon' : '',
        disabled ? 'is-disabled' : '',

      ]">
      <i :class="icon" v-if="icon"></i>
      <slot></slot></button>
</template>
<script>
export default {
  name: 'ElButton',
  props: {
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: String,
    disabled: Boolean,
  },
};
</script>
