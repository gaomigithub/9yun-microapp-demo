import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// https://vitejs.dev/config/
export default defineConfig({
    // base: '/admin/',
    server: {
        host: '0.0.0.0'
        // proxy: {
        //     '/api': {
        //         // 匹配的请求路径前缀
        //         target: 'http://your-backend-server-url.com', // 目标服务器地址
        //         changeOrigin: true, // 允许跨域
        //         rewrite: (path) => path.replace(/^\/api/, ''), // 如果后端接口不需要/api前缀，可以重写路径
        //         secure: false, // 如果目标服务器是HTTPS且证书不受信任，则设置为false以允许连接
        //         headers: {
        //             // 可选：添加自定义请求头
        //             'X-Custom-Header': 'value'
        //         }
        //     }
        // }
    },
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            resolvers: [ElementPlusResolver()],
            eslintrc: {
                enabled: true
            }
        }),
        Components({
            directoryAsNamespace: true,
            resolvers: [ElementPlusResolver()]
        }),
        createStyleImportPlugin({
            resolves: [ElementPlusResolve()]
        }),
        createSvgIconsPlugin({
            // 配置路劲在你的src里的svg存放文件
            iconDirs: [fileURLToPath(new URL('./src/assets/icons', import.meta.url))],
            symbolId: 'local-icon-[dir]-[name]'
        }),
        vueSetupExtend()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString()
                }
            }
        }
    }
})
