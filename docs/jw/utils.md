# jw.utils 功能函数库

## download

- **参数**：
  - `{string} filename 下载的文件名称`
  - `{string} url 需下载的文件地址`

- **用法**：

  克隆简单对象和数组

  ``` js
   window.jw.utils.download('logo.png', 'https://www.baidu.com/img/bd_logo1.png?qua=high')
  ```

## clone

- **参数**：
  - `{Object|Array} obj 需要克隆的对象或数组`

- **用法**：

  克隆简单对象和数组

  ``` js
  jw.utils.clone({ a: '111' }) // return { a: '111' }
  ```