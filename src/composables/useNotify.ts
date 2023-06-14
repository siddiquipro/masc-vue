// useNotify;

import { useModal } from "./useModal";
import { useLoading } from "./useLoading";
import { useToast, ToastProps } from "vue-toast-notification";

class Notify {
  toast = useToast({ duration: 5000 });
  modal = useModal();
  loading = useLoading();

  success(msg: any, options: ToastProps = {}) {
    this.toast.success(this.getMsg(msg), options);
  }

  info(msg: any, options: ToastProps = {}) {
    this.toast.info(this.getMsg(msg), options);
  }

  warning(msg: any, options: ToastProps = {}) {
    this.toast.warning(this.getMsg(msg), options);
  }

  error(msg: any, options: ToastProps = {}) {
    this.toast.error(this.getMsg(msg), options);
  }

  async confirm(msg: any, title = "Confirm", confirmBtnText = "Confirm") {
    return await this.modal.open({ title, msg, confirmBtnText });
  }

  async alert(msg: any, title = "Alert", confirmBtnText = "OK") {
    return await this.modal.open({ title, msg, cancelBtn: false, confirmBtnText });
  }

  getMsg(msg: any) {
    const defaultMsg = "There's been an error, please try again.";
    if (!msg) return defaultMsg;
    if (typeof msg === "string") return msg;

    if (!Array.isArray(msg) && typeof msg === "object" && msg.response) msg = msg.response;
    if (Array.isArray(msg)) return msg.join(`\n`);
    if (typeof msg.data === "string") return msg.data;
    if (msg.data && typeof msg.data.msg === "string") return msg.data.msg;
    if (msg.data && typeof msg.data.message === "string") return msg.data.message;
    if (msg.data && typeof msg.data.error === "string") return msg.data.error;
    return defaultMsg;
  }
}

export function useNotify() {
  return new Notify();
}
