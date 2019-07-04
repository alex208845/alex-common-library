let utils = {}

/**
 * 下载文件
 * @param {String} filename 文件名称
 * @param {String} url 文件 url 地址，只能是当前域下的文件
 */
utils.download = function (filename, url) {
  let a = document.createElement('a')
  document.getElementsByTagName('body')[0].appendChild(a)
  a.href = url
  a.download = filename
  a.click()
  a.parentNode.removeChild(a)
}

/**
 * 简单类型数据克隆
 * @param {Object|Array} obj
 */
utils.clone = function (obj) {
  let str
  let newobj = obj.constructor === Array ? [] : {}
  if (typeof obj !== 'object') {
    return
  } else if (window.JSON) {
    str = JSON.stringify(obj) // 系列化对象
    newobj = JSON.parse(str) // 还原
  } else {
    for (var i in obj) {
      newobj[i] = typeof obj[i] === 'object'
          ? this.clone(obj[i]) : obj[i]
    }
  }
  return newobj
}

export default utils
