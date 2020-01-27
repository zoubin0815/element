import Main from './src/Main.vue';

Main.install = (Vue) => {
  Vue.compomemt(Main.name, Main);
};
export default Main;
