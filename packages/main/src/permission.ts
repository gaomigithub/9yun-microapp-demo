/**
 * 权限控制
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import type { RouteRecordRaw } from 'vue-router'
import config from './config'
import { PageEnum } from './enums/pageEnum'
import router, { findFirstValidRoute } from './router'
import { INDEX_ROUTE, INDEX_ROUTE_NAME } from './router/routes'
import useTabsStore from './stores/modules/multipleTabs'
import useUserStore from './stores/modules/user'
import { clearAuthInfo } from './utils/auth'
import { isExternal } from './utils/validate'

// NProgress配置
NProgress.configure({ showSpinner: false })

const loginPath = PageEnum.LOGIN
const defaultPath = PageEnum.INDEX
const notFound = PageEnum.ERROR_404
// 免登录白名单
const whiteList: string[] = [PageEnum.LOGIN, PageEnum.ERROR_403]
router.beforeEach(async (to, from, next) => {
    // 开始 Progress Bar
    NProgress.start()
    document.title = to.meta.title ?? config.title
    const userStore = useUserStore()
    const tabsStore = useTabsStore()
    if (whiteList.includes(to.path)) {
        // 在免登录白名单，直接进入
        next()
    } else if (userStore.token) {
        // 获取用户信息
        const hasGetUserInfo = Object.keys(userStore.userInfo).length !== 0
        if (hasGetUserInfo) {
            console.log('获取用户信息，进入守卫::', {
                hasGetUserInfo,
                to,
                routes: userStore.routes
            })
            if (to.path === loginPath) {
                return next({ path: defaultPath })
            } else if (to.name) {
                return next()
            }
            // else if (
            //     to.path.includes(`/microapp`)
            //     // childrenPath.some(item => to.path.includes(item))
            // ) {
            //     console.log('微服务中，next')

            //     // 动态添加路由
            //     const lastSlashIndex = to.path.lastIndexOf('/')
            //     const microappIndex = to.path.indexOf('/microapp') + '/microapp'.length
            //     const MICROAPP_ROUTE: RouteRecordRaw = {
            //         path: to.path,
            //         // component: () => import(`@/views/microapp/${to.path.slice(microappIndex).split('/')[1]}.vue`),
            //         component: () => import(`@/views/microapp/${to.path.slice(microappIndex).split('/')[1]}/index.vue`),
            //         name: Symbol(to.path.substring(lastSlashIndex + 1))
            //     }

            //     router.addRoute(MICROAPP_ROUTE)

            //     return next({ ...to })

            //     // 触发重定向: 根据doc中指明，如果你决定在导航守卫内部添加或删除路由，你不应该调用 router.replace()，而是通过返回新的位置来触发重定向
            //     // https://router.vuejs.org/zh/guide/advanced/dynamic-routing.html
            //     // return to.fullPath
            // }
            else {
                return next({ path: notFound })
            }
        } else {
            try {
                await userStore.getUserInfo()
                await userStore.getMenu()
                const routes = userStore.routes
                // 找到第一个有效路由
                const routeName = findFirstValidRoute(routes)
                // 没有有效路由跳转到403页面
                if (!routeName) {
                    clearAuthInfo()
                    next(PageEnum.ERROR_403)
                    return
                }
                tabsStore.setRouteName(routeName!)
                INDEX_ROUTE.redirect = { name: routeName }

                // 动态添加index路由
                router.addRoute(INDEX_ROUTE)
                routes.forEach((route: any) => {
                    // https 则不插入
                    if (isExternal(route.path)) {
                        return
                    }
                    if (!route.children) {
                        router.addRoute(INDEX_ROUTE_NAME, route)
                        return
                    }
                    // 动态添加可访问路由表
                    router.addRoute(route)
                })
                next({ ...to, replace: true })
            } catch (err) {
                clearAuthInfo()
                next({ path: loginPath, query: { redirect: to.fullPath } })
            }
        }
    } else {
        next({ path: loginPath, query: { redirect: to.fullPath } })
    }
})

router.afterEach(() => {
    NProgress.done()
})
