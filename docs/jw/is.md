# is 函数库

## isBrowser

- **参数**：
  - `{String} fmt`

- **用法**：

  判断是否在浏览器中

  ``` js
  window.jw.is.isBrowser()
  ```

- **参考**：

## isArray

- **参数**：
  - `{Object} arr`

- **用法**：

  判断输入的参数是否数组类型

  ``` js
  let arr = []
  window.jw.is.isArray(arr) // return true
  ```

- **参考**：

## isString

- **参数**：
  - `{Object} str`

- **用法**：

  判断输入的参数是否字符串

  ``` js
  let str = 'abdcefg'
  window.jw.is.isString(str) // return true
  ```

- **参考**：

## isBoolean

- **参数**：
  - `{Object} val`

- **用法**：

  判断输入的参数是否布尔值

  ``` js
  let val = true
  window.jw.is.isString(val) // return true
  ```

- **参考**：

## isFunction

- **参数**：
  - `{Object} func`

- **用法**：

  判断输入的参数是否函数

  ``` js
  let val = ()=>{}
  window.jw.is.isFunction(val) // return true
  ```

- **参考**：

## isObject

- **参数**：
  - `{Object} obj`

- **用法**：

  判断输入的参数是否 Object 类型

  ``` js
  let val = {}
  window.jw.is.isObject(val) // return true
  ```

- **参考**：

## isPlainObject

- **参数**：
  - `{Object} obj`

- **用法**：

  判断输入的参数是否是一个纯粹的对象

  ``` js
  let val = {}
  window.jw.is.isPlainObject(val) // return true
  ```

- **参考**：

## isBlob

- **参数**：
  - `{Object} blob`

- **用法**：

  判断输入的参数是否是一个 Blob 对象

  ``` js
  let val = new Blob()
  window.jw.is.isBlob(val) // return true
  ```

- **参考**：

## isFormData

- **参数**：
  - `{Object} formData`

- **用法**：

  判断输入的参数是否是一个 FormData 对象

  ``` js
  let val = new FormData()
  window.jw.is.isFormData(val) // return true
  ```

- **参考**：

## isRegExp

- **参数**：
  - `{Object} formData`

- **用法**：

  判断输入的参数是否是一个正则表达式对象

  ``` js
  let val = \test\
  window.jw.is.isRegExp(val) // return true
  ```

- **参考**：

## isWechat

- **参数**：

- **用法**：

  判断当前是否在微信浏览器中

  ``` js
  window.jw.is.isWechat() // return true
  ```

- **参考**：