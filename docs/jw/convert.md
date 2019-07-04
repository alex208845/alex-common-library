# jw.convert 数据转换函数库

## #jw.convert.blobtoUrl

  * 类型： function
  * 默认值： undefined
  * 用法：

     ```javascript
     window.jw.convert.blobtourl(blob)
     ```
    > 将 blob 对象转换成 url

## #jw.convert.dataURLtoBlob

  * 类型： function
  * 默认值： undefined
  * 用法：

     ```javascript
     window.jw.convert.dataURLtoBlob(dataUrl)
     ```
    > 将 dataUrl 转换成 blob

## #jw.convert.stringtoUrl

  * 类型： function
  * 默认值： undefined
  * 用法：

     ```javascript
     window.jw.convert.stringtoUrl(['var d = "bbbb"'], 'text/javascript')
     ```
    > 将 string 或 string 数组转成 url