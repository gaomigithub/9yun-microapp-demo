import renderWithQiankun, {
  QiankunProps,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { App, Component, createApp } from "vue";

const isMicroApp = qiankunWindow.__POWERED_BY_QIANKUN__;
export const render = (
  AppRoot: Component,
  domId,
  configApp: (app: App, props?: QiankunProps) => any
) => {
  let app: App;
  const _render = (props: QiankunProps = {}) => {
    const { container } = props;

    const root: string | Element = container
      ? container.querySelector(domId)!
      : domId; // 避免 id 重复导致微应用挂载失败
    app = createApp(AppRoot);
    // 回调配置app的函数 让调用的地方 可以使用app
    configApp(app, props);
    app.mount(root);
  };
  const initQiankun = () => {
    renderWithQiankun({
      bootstrap() {
        console.log("Vue微应用：bootstrap");
      },
      mount(props) {
        // 获取主应用传入数据
        console.log("Vue微应用：mount", props);
        _render(props);
      },
      unmount(props) {
        console.log("Vue微应用：unmount", props);
        app.unmount();
      },
      update(props) {
        console.log("Vue微应用：update", props);
      },
    });
  };
  isMicroApp ? initQiankun() : _render();
};
