
/**
 * Component proxy
 * by 13
 */
import { Rate } from 'iview';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewCtor = wrap(Rate); // 加垫片
// 加垫片注册
NewCtor = mapComponent({
  Ctor: NewCtor,
  libName: 'iview'
});

export default NewCtor;
