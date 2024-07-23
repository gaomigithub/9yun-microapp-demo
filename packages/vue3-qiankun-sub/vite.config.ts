import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import qiankun from "vite-plugin-qiankun";
import { resolve } from "path";

export const pathResolve = (dir: string) => resolve(process.cwd(), ".", dir);

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: mode == "production" ? `/${env.VITE_APP_NAME}/` : "",
    // base: `/${env.VITE_APP_NAME}/`,
    // base: `/microapp/vue/`,
    plugins: [
      vue(),
      vueJsx(),
      qiankun(env.VITE_APP_NAME, { useDevMode: true }),
    ],
    server: {
      host: "0.0.0.0",
      port: 2000,
      // proxy: {
      //   "/api": {
      //     // 匹配的请求路径前缀
      //     target: "http://your-backend-server-url.com", // 目标服务器地址
      //     changeOrigin: true, // 允许跨域
      //     rewrite: (path) => path.replace(/^\/api/, ""), // 如果后端接口不需要/api前缀，可以重写路径
      //     secure: false, // 如果目标服务器是HTTPS且证书不受信任，则设置为false以允许连接
      //     headers: {
      //       // 可选：添加自定义请求头
      //       "X-Custom-Header": "value",
      //     },
      //   },
      // },
      // proxy: {
      //   "/api": {
      //     target: "http://localhost:5173/",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/\/api/, ""),
      //   },
      // },
    },
    resolve: {
      alias: {
        "@": pathResolve("src"),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  };
});
