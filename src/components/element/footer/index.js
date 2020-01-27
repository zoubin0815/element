// eslint-disable-next-line import/no-unresolved
import Footer from './src/Footer.vue';

Footer.install = (Vue) => {
  Vue.compomemt(Footer.name, Footer);
};
export default Footer;
