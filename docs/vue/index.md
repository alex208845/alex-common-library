# Vue 扩展方法

## vm.$event.$global.$emit(eventName, payload)

- **参数**：
  - `{String} eventName  事件名称`
  - `{Object} payload 传递的数据`

- **用法**：

  触发全局事件

  ``` js
  this.$event.$global.$emit('global_event', { title: '测试' })
  ```

- **参考**：

## vm.$event.$global.$on(eventName, cb)

- **参数**：
  - `{String} eventName  事件名称`
  - `{Function} cb 回调函数， function(payload){}`

- **用法**：

  监听全局事件

  ``` js
  this.$event.$global.$on('global_event', function(data)=> { console.log(data) })
  ```

- **参考**：[全局触发事件](./index.md#vm.$event.$global.$emit)

## vm.$event.$emit(eventName, payload)

- **参数**：
  - `{String} eventName  事件名称`
  - `{Object} payload 传递的数据`

- **用法**：

  局布触发事件（应页内）

  ``` js
  this.$event.$emit('page_event', { title: '测试' })
  ```

- **参考**：

## vm.$event.$on(eventName, cb)

- **参数**：
  - `{String} eventName  事件名称`
  - `{Function} cb 回调函数 function(data){}`

- **用法**：

  局布监听事件（应页内）

  ``` js
  this.$event.$on('page_event', data=>{ console.log(data) })
  ```

- **参考**：