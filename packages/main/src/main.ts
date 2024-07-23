import { createApp } from 'vue'
import App from './App.vue'
import './public-path'
import install from './install'
import './permission'
import './styles/index.scss'
import 'virtual:svg-icons-register'
import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
    //   {
    //     // 微应用的名称，后续微应用通过此名称进行识别
    //     name: "sub-app-1",
    //     // 微应用的入口
    //     entry: "http://localhost:5001/",
    //     // 微应用加载的容器，与上面的id需保持完全一致
    //     container: "#sub-app-1-container",
    //     // 激活微应用的规则（路由），需要与路由文件的路径保持一致，同时需要与子应用嵌入页面的路由保持一致
    //     activeRule: "/sub-app-1",
    //     // 向子应用传递参数
    //     props: {
    //       data: "Hello App1 -from mainApp",
    //     },
    //   },
    {
        name: 'sub-app-2',
        entry: '//localhost:5002/sub-app-2/',
        container: '#sub-app-2-container',
        activeRule: '/microapp/sub-app-2',
        props: {
            data: 'Hello App2 -from mainApp'
        }
    },
    {
        name: 'sub-app-react',
        entry: '//localhost:5002/sub-app-2/',
        container: '#sub-app-2-container',
        activeRule: '/microapp/sub-app-2',
        props: {
            data: 'Hello App2 -from mainApp'
        }
    },
    {
        name: 'sub-app-vue',
        // entry: '//localhost:2000/sub-app-vue/',
        entry: '//localhost:2000',
        container: '#sub-app-vue-container',
        activeRule: '/microapp/vue',
        props: {
            data: 'Hello Vue Subapp -from mainApp'
        }
    }
])

start()
//     {
//   sandbox: {
//     // strictStyleIsolation: true, // 开启严格的样式隔离模式
//     experimentalStyleIsolation: true, // 开启后所有样式都会加上一个类名 .app-main {}
//     //    ===>  div[data-qiankun-react16] .app-main {}
//   },
//   singular: false, // 单一时间只渲染一个微应用，默认为true
// }

// 独立运行时
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
    const app = createApp(App)
    console.log(app)
    app.use(install)
    app.mount('#app')
}
