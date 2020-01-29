import Row from '@element/row';
import Col from '@element/col';
import Container from '@element/container';
// eslint-disable-next-line import/no-unresolved
import Main from '@element/main';
// eslint-disable-next-line import/no-unresolved
import Header from '@element/header';
// eslint-disable-next-line import/no-unresolved
import Footer from '@element/footer';
// eslint-disable-next-line import/no-unresolved
import Aside from '@element/aside';
import Icon from '@element/icon';
import Button from '@element/button';

const components = [
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Icon,
  Button,
];
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
export default {
  install,
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Icon,
  Button,


};
export {
  install,
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Icon,
  Button,

};
