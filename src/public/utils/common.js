import store from '../store'

export const getToken = () => {
  return 'bdc9dad5-5c67-4b60-bbfa-1cf8a087e8e4'
  // return localStorage.getItem('token') || ''
}
export const getRoutes = (context, ignore) => {
  const children = []
  context.keys().forEach(key => {
    if (key !== ignore) {
      let arr = context(key).default
      if (arr && arr.length) {
        children.push(...arr)
      }
    }
  })
  return children
}
export const registerStoreModule = (module, name) => {
  let need = Object.values(module).some(v => Object.keys(v).length > 0)
  if (need) {
    store.registerModule(name, module)
  }
}

export const createModuleLayout = (name) => {
  return {
    name,
    render (h) {
      // 这里需要使用transition，否则多个路由渲染同一个组件时，路由守卫触发时机不正确
      // https://github.com/vuejs/vue-router/issues/750
      return (
        <transition css={false} name="fade" mode="out-in">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      )
    },
    computed: {
      cachedViews () {
        // return this.$store.state.tagsView.cachedViews
      }
    }
  }
}

export const random = (count) => {
  let num = Date.now() + Math.floor(1000 * Math.random() + 1000)
  if (count) {
    return num.toString().substr(-count)
  }
  return num.toString()
}
