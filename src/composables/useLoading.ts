import { createComponent } from "../utils/renderer";
import LoadingComponent from "../components/loading/s-loading.vue";

class Loading {
  static show(props: any = {}) {
    const forceProps = {
      open: true,
      isFullPage: false,
    };
    const propsData = { ...props, ...forceProps };
    let parentContainer = propsData.container;
    if (!propsData.container) {
      parentContainer = document.body;
      propsData.isFullPage = true;
    }
    const data = createComponent(LoadingComponent, propsData, parentContainer);

    return { hide: () => data.remove() };
  }
}

export function useLoading() {
  return Loading;
}
