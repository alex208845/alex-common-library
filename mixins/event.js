
let plugins = []

let findParentVm = function () {
  if (this.$parent) {
    if (this.$parent.$options._componentTag === 'jw-frame') {
      return this
    } else {
      return findParentVm.bind(this.$parent)()
    }
  } else {
    return this
  }
}

export default {
  data () {
    return {
      _plugins: plugins,
      _globalEvents: [],
      _selfEvents: []
    }
  },
  beforeCreate () {
    this.$event = {}
    this.$event.$global = {}
    this.$event.$global.$on = (eventName, callback) => {
      if (eventName && callback) {
        this.$data._globalEvents.push({
          eventName,
          callback
        })
        this.$root.$on(eventName, callback)
      }
    }
    this.$event.$global.$emit = (eventName, playload) => {
      if (eventName) {
        this.$root.$emit(eventName, playload)
      }
    }
    this.$event.$on = (eventName, callback) => {
      if (eventName && callback) {
        let vm = findParentVm.bind(this)()
        if (vm) {
          this.$data._selfEvents.push({
            eventName,
            callback
          })
          vm.$on(eventName, callback)
        }
      }
    }
    this.$event.$emit = (eventName, playload) => {
      if (eventName) {
        let vm = findParentVm.bind(this)()
        if (vm) {
          vm.$emit(eventName, playload)
        }
      }
    }
  },
  methods: {
  },
  beforeDestroy () {
    this.$data._globalEvents.forEach(row => {
      this.$root.$off(row.eventName, row.callback)
    })
    let vm = findParentVm.bind(this)()
    if (vm) {
      this.$data._selfEvents.forEach(row => {
        vm.$off(row.eventName, row.callback)
      })
    }
  }
}
