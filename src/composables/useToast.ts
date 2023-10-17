import ToastVue from "../components/toast/toast.vue";
import { createComponent } from "../utils/renderer";

export interface toastOptions {
  msg: string;
  type?: string;
}

const OPTS: any = {
  onAddCallback: null,
};

async function initializeToast() {
  const onAdd = (onAdd: any) => {
    OPTS.onAddCallback = onAdd;
  };
  try {
    createComponent(ToastVue, { onAdd });
  } catch (error) {
    console.log(error);
  }
}

class Toast {
  private onAddCallback: any;

  public async open(options: toastOptions) {
    if (typeof options === "string") options = { msg: options };

    if (!this.onAddCallback) await initializeToast();

    const type = options.type || "info";
    const message = options.msg || "";
    const opts = { duration: 5000 };
    OPTS.onAddCallback(type, message, opts);
  }
}

const toast = new Toast();

export function useToast() {
  return toast;
}
