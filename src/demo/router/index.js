import demo from './module'
const layout = () => import(/* webpackChunkName: "ecms" */ '../pages/layout')
console.log('layout2')
export default {
  name: 'demoLayout',
  layout,
  chunks: { demo }
}
