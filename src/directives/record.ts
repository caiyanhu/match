import type { Directive, DirectiveBinding } from "vue";

import { isTouchDevice } from "@/utils/device";

interface CustomElement extends HTMLElement {
  start: (event: MouseEvent | TouchEvent) => void;
}

const longPressDirective: Directive = {
  beforeMount(el: CustomElement, binding: DirectiveBinding) {
    el.start = (event: MouseEvent | TouchEvent) => {
      event.preventDefault();
      event.stopPropagation();

      binding.value();
    };

    // 事件监听
    if (isTouchDevice()) {
      el.addEventListener("touchstart", el.start);
    } else {
      el.addEventListener("mousedown", el.start);
    }
  },
  unmounted(el: CustomElement) {
    // 解除事件绑定
    if (isTouchDevice()) {
      el.removeEventListener("touchstart", el.start);
    } else {
      el.removeEventListener("mousedown", el.start);
    }
  },
};

export default longPressDirective;
