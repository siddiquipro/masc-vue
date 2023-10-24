import ModalVue from "../components/modal/s-modal.vue";
import { createComponent } from "../utils/renderer";
import { ModalOptionsI } from "../utils/types";

class Modal {
  static async open(options: ModalOptionsI) {
    if (typeof options === "string") options = { msg: options };

    return new Promise((resolve) => {
      if (typeof options !== "object") return console.log("invalid options passed");

      try {
        let rendered: any;
        const props = {
          modelValue: true,
          persist: false,
          footer: true,
          closeIcon: false,
          title: options.title || "Please ",
          msg: options.msg || "",
          cancelBtn: options.hasOwnProperty("cancelBtn") ? options.cancelBtn : true,
          cancelBtnText: options.cancelBtnText || "Cancel",
          confirmBtnText: options.confirmBtnText || "Confirm",
          onClose: (val: any) => {
            if (rendered && typeof rendered.remove === "function") rendered.remove();
            resolve(val);
          },
        };
        rendered = createComponent(ModalVue, props);
      } catch (error) {
        console.log(error);
        resolve(false);
      }
    });
  }
}

export function useModal() {
  return Modal;
}
