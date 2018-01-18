
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import { Colorpicker } from 'iview';
import {
  replaceIviewComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewCtor = shim(Colorpicker); // 加垫片
// 替换组件前缀
replaceIviewComponentPrefix(NewCtor);
// 自动注册组件
Vue.component(NewCtor.name, NewCtor);

export default NewCtor;