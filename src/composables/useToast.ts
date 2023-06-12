class Toast {
  success(msg: string) {
    console.log(msg);
    // this.toast.success(this.getMsg(msg));
  }

  info(msg: string) {
    console.log(msg);
    // this.toast.info(this.getMsg(msg));
  }

  warning(msg: string) {
    console.log(msg);
    // this.toast.warning(this.getMsg(msg));
  }

  error(msg: string) {
    // console.log(msg);
    console.log(msg);
    // this.toast.error(this.getMsg(msg));
  }
}

export function useToast() {
  return new Toast();
}
