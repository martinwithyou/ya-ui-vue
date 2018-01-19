
/**
 * Component proxy
 * by 13
 */
import { Sider } from 'iview';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewCtor = wrap(Sider); // 加垫片
// 加垫片注册
NewCtor = mapComponent({
  Ctor: NewCtor,
  libName: 'iview'
});

export default NewCtor;
