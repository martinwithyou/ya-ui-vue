/**
 * 垫片侵入
 * by 13
 */
function shim(Ctor) {
  // 扩展
  const methods = Ctor.mixins[0].methods;
  const doOpen = methods.doOpen;

  const Popup = Vue.component('m-popup', {
    extends: Ctor,
    methods: {
      doOpen(props) {
        const modal = props.modal;
        const lockScroll = props.lockScroll;
        if (modal && lockScroll) {
          const winScrollTop = document.body.scrollTop + document.documentElement.scrollTop;
          this.winScrollTop = winScrollTop; // window scroll top
          const childNodes = Array.prototype.slice.call(document.body.childNodes, 0);
          childNodes.some((node) => {
            if (node.style && node.tagName === 'DIV') { // 只找第一个div
              // node.style.transform = 'translateY(-' + winScrollTop  + 'px)';
              node.style.marginTop = -winScrollTop + 'px';
              return true;
            }
          });
        }
        return doOpen.apply(this, arguments);
      },
      doClose() {
        this.visible = false;
        this.$emit('input', false);
        this._closing = true;

        this.onClose && this.onClose();

        if (this.lockScroll) {
          clearTimeout(this.closeTid);
          this.closeTid = setTimeout(() => {
            if (this.modal && this.bodyOverflow !== 'hidden') {
              document.body.style.overflow = this.bodyOverflow;
              document.body.style.paddingRight = this.bodyPaddingRight;
            }
            this.bodyOverflow = null;
            this.bodyPaddingRight = null;
            if (this.winScrollTop !== -1) {
              const childNodes = Array.prototype.slice.call(document.body.childNodes, 0);
              childNodes.some((node) => {
                if (node.style && node.tagName === 'DIV') { // 只找第一个div
                  // node.style.transform = 'none';
                  node.style.marginTop = 'auto';
                  return true;
                }
              });
              window.scrollTo(0, this.winScrollTop);
              this.winScrollTop = -1;
            }
          }, 100);
        }

        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
      }
    }
  });
  return Popup;
}
export default shim;