import { useModal } from "./useModal";
import { useLoading } from "./useLoading";
import { useToast } from "./useToast";

class Notify {
  toast = useToast();
  modal = useModal();
  loading = useLoading();

  success(msg: any, options = {}) {
    const opts = { ...options, type: "success", msg: this.getMsg(msg) };
    this.toast.open(opts);
  }

  info(msg: any, options = {}) {
    this.toast.open({ ...options, type: "info", msg: this.getMsg(msg) });
  }

  warning(msg: any, options = {}) {
    this.toast.open({ ...options, type: "warning", msg: this.getMsg(msg) });
  }

  error(msg: any, options = {}) {
    this.toast.open({ ...options, type: "error", msg: this.getMsg(msg) });
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
