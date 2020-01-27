import Header from './src/Header.vue';

Header.install = (Vue) => {
  Vue.compomemt(Header.name, Header);
};
export default Header;
