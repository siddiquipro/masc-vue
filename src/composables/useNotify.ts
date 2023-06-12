// useNotify;

import { useModal } from "./useModal";
import { useLoading } from "./useLoading";
import { useToast } from "./useToast";

class Notify {
  toast = useToast();
  modal = useModal();
  loading = useLoading();

  success(msg: any) {
    this.toast.success(this.getMsg(msg));
  }

  info(msg: any) {
    this.toast.info(this.getMsg(msg));
  }

  warning(msg: any) {
    this.toast.warning(this.getMsg(msg));
  }

  error(msg: any) {
    this.toast.error(this.getMsg(msg));
  }

  async confirm(msg: any, title = "Confirm", confirmBtnText = "Confirm") {
    return await this.modal.open({ title, msg, confirmBtnText });
  }

  async alert(msg: any, title = "Alert", confirmBtnText = "OK") {
    return await this.modal.open({ title, msg, cancelBtn: false, confirmBtnText });
  }

  getMsg(msg: any) {
    if (!msg) return "There's been an error, please try again.";
    if (typeof msg === "string") return msg;

    if (!Array.isArray(msg) && typeof msg === "object" && msg.response) msg = msg.response;
    if (Array.isArray(msg)) return msg.join(`\n`);
    if (typeof msg.data === "string") return msg.data;
    if (msg.data && typeof msg.data.msg === "string") return msg.data.msg;
    if (msg.data && typeof msg.data.message === "string") return msg.data.message;
    if (msg.data && typeof msg.data.error === "string") return msg.data.error;

    return "There's been an error, please try again.";
  }
}

export function useNotify() {
  return new Notify();
}
