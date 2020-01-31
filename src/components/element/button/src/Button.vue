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
        size ? `el-button--${size}` : '',

      ]">
      <i :class="icon" v-if="icon && !loading"></i>
      <i class="el-icon-loading" v-if="loading"></i>

      <span v-if="$slots.default"><slot></slot></span>
      </button>
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
    loading: Boolean,
    size: String,
  },
};
</script>
