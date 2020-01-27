import Container from './src/Container.vue';

Container.install = (Vue) => {
  Vue.compomemt(Container.name, Container);
};
export default Container;
