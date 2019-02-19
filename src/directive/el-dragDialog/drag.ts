import { DirectiveBinding } from 'vue/types/options';
import { VNode } from 'vue';

export default{
  bind(el: Element, binding: DirectiveBinding, vnode: VNode) {
    const dialogHeaderEl = el.querySelector('.el-dialog__header') as HTMLElement;
    const dragDom = el.querySelector('.el-dialog') as HTMLElement;
    dialogHeaderEl.style.cssText += ';cursor:move;';
    dragDom.style.cssText += ';top:0px;';

    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const getStyle: (dom: Element, attr: string) => string = (() => {
      if (window.document.hasOwnProperty('currentStyle')) {
        return (dom: any, attr: string) => dom.currentStyle[attr];
      } else {
        return (dom: Element, attr: string) => getComputedStyle(dom, null).getPropertyValue(attr);
      }
    })();

    dialogHeaderEl.onmousedown = (e: MouseEvent) => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft;
      const disY = e.clientY - dialogHeaderEl.offsetTop;

      const dragDomWidth = dragDom.offsetWidth;
      const dragDomHeight = dragDom.offsetHeight;

      const screenWidth = document.body.clientWidth;
      const screenHeight = document.body.clientHeight;

      const minDragDomLeft = dragDom.offsetLeft;
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;

      const minDragDomTop = dragDom.offsetTop;
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight;

      // 获取到的值带px 正则匹配替换
      let styL: string | number = getStyle(dragDom, 'left');
      let styT: string | number = getStyle(dragDom, 'top');

      if (styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100);
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100);
      } else {
        styL = +styL.replace(/\px/g, '');
        styT = +styT.replace(/\px/g, '');
      }

      document.onmousemove = (event: MouseEvent) => {
        // 通过事件委托，计算移动的距离
        let left = event.clientX - disX;
        let top = event.clientY - disY;

        // 边界处理
        if (-(left) > minDragDomLeft) {
          left = -minDragDomLeft;
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft;
        }

        if (-(top) > minDragDomTop) {
          top = -minDragDomTop;
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop;
        }

        // 移动当前元素
        dragDom.style.cssText += `;left:${left + (styL as number)}px;top:${top + (styT as number)}px;`;

        // emit onDrag event
        // vnode.child.$emit('dragDialog')
        vnode.componentInstance!.$emit('dragDialog');
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  },
};
