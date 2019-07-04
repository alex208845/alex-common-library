let convert = {}

/**
 * 将 Blob 对象传换成 url
 * @param {Blob} blob
 */
convert.blobtoUrl = function (blob) {
  let URL = window.URL || window.webkitURL || window.mozURL || window.msURL
  return URL.createObjectURL(blob)
}

/**
 * 将数据 url 转换成 Blob
 * @param {String} dataurl
 */
convert.dataURLtoBlob = function (dataurl) {
  let arr = dataurl.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = window.atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new window.Blob([u8arr], {
    type: mime
  })
}

/**
 * 将字符串转换成 url
 * @param {String|Array} strs  字符串或字符串数组
 * @param {String} minitype 迷你类型
 */
convert.stringtoUrl = function (strs, minitype) {
  let URL = window.URL || window.webkitURL || window.mozURL || window.msURL
  let blob = new window.Blob([].concat(strs), {
    type: minitype || 'text/html'
  })
  return URL.createObjectURL(blob)
}

export default convert
