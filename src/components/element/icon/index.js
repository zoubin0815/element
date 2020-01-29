import Icon from './src/Icon.vue';

Icon.install = (Vue) => {
  Vue.compomemt(Icon.name, Icon);
};
export default Icon;
