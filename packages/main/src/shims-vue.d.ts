/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

/* 下面这段是新添加的代码**/
declare global {
    interface Window {
        __POWERED_BY_QIANKUN__: boolean
    }
}

export {}
