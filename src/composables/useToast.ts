import ToastVue from "../components/toast/toast.vue";
import { createComponent } from "../utils/renderer";

interface toastOptions {
  msg: string;
  type?: string;
}

class Toast {
  private onAddCallback: any;

  private async initializeToast() {
    const onAdd = (onAdd: any) => {
      this.onAddCallback = onAdd;
    };
    try {
      createComponent(ToastVue, { onAdd });
    } catch (error) {
      console.log(error);
    }
  }

  public async open(options: toastOptions) {
    if (typeof options === "string") options = { msg: options };

    if (!this.onAddCallback) await this.initializeToast();

    const type = options.type || "info";
    const message = options.msg || "";
    const opts = { duration: 5000 };
    this.onAddCallback(type, message, opts);
  }
}

const toast = new Toast();

export function useToast() {
  return toast;
}
