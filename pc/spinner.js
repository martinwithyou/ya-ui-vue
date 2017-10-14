import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/spinner.css';
import Spinner from 'element-ui/lib/spinner';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Spinner.name, 'el-', 'y-'), Spinner);
export default Spinner;