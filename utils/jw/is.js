/* globals Blob, FormData */

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
}

let result = {}

result.isBrowser = function () {
  return typeof window !== 'undefined'
}

result.isArray = Array.isArray

result.isString = function isString (val) {
  return typeof val === 'string'
}

result.isBoolean = function isBoolean (val) {
  return val === true || val === false
}

result.isFunction = function isFunction (val) {
  return typeof val === 'function'
}

result.isObject = function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

result.isPlainObject = function isPlainObject (obj) {
  return result.isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype
}

result.isBlob = function isBlob (obj) {
  return typeof Blob !== 'undefined' && obj instanceof Blob
}

result.isFormData = function isFormData (obj) {
  return typeof FormData !== 'undefined' && obj instanceof FormData
}

result.isRegExp = function isRegExp (obj) {
  return typeof RegExp !== 'undefined' && obj instanceof RegExp
}

result.isWechat = function () {
  return window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === 'micromessenger'
}

export { result as default }
