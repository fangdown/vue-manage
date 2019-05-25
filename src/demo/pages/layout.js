import module from '../store'
import { registerStoreModule, createModuleLayout } from 'public/utils'
console.log('layout')
registerStoreModule(module, 'demo')

export default createModuleLayout('demoLayout')
