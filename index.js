import './utils'
import mixins from './mixins'
function install (Vue) {
  mixins.forEach(row => {
    Vue.mixin(row)
  })
}

require('./css/element-ui-reset.less')
export default { install }
