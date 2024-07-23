// import "./style.css";
import App from "./App.vue";
import "./public-path";
import router from "./router";
import antv from "ant-design-vue";
import { render } from "@/hooks/microApp";

render(App, "#sub-app-vue", (app, props) => {
  app.use(router).use(antv);
});
