/**
 * 下载文件
 * @export
 * @param {string} fileName 文件名
 * @param {string} fileUrl 文件路径
 * @example
 * downLoadFile('image.jpg', 'http://test/image.jpg')
 */
function downLoadFile (fileName, fileUrl) {
  let a = document.getElementById('public-virtual-a')
  if (!a) {
    a = document.createElement('a')
    a.setAttribute('id', 'public-virtual-a')
    document.getElementsByTagName('body')[0].appendChild(a)
  }
  a.href = fileUrl
  a.download = fileName
  a.click()
}

/**
 * 列表转换为树型结构
 * @export
 * @param arr 数据列表
 * @param id 唯一标识
 * @param pid 父节点的key
 * @param child 子节点KEY
 * @param root 根节点的值
 *
 */
function listtoTree (arr, id = 'id', pid = 'parentid', child = 'children', root = 0) {
  let tree = []
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    let key = item[id]
    let pkey = item[pid]
    let obj = {}
    obj[child] = []
    Object.assign(item, obj, map[key])
    if (map[key]) {
      map[key][child].forEach(function (child) {
        child[pid] = item
      })
    }
    map[key] = item
    if (pkey === root) {
      tree.push(item)
    } else {
      item[pid] = map[pkey]
      if (map[pkey]) {
        map[pkey][child].push(item)
      } else {
        let obj = {}
        obj[child] = [item]
        map[pkey] = obj
      }
    }
  }
  for (let key in map) {
    if (!map[key].children.length) {
      delete map[key].children
    }
  }
  return tree
}

/**
 * 表格输入框验证规则配置
 * @param required 是否必填
 * @param max 最大长度限制
 * @param validator 进行校验的方法
 * @param type 类型
 * @param regx 正则表达式
 * @param msg 特定的message
 * @returns {Array}
 */

function formItemRuleConfig ({ required, max, validator, type, regx, msg }) {
  const err = {
    empty: '不能为空，请输入',
    format: '格式错误，请输入',
    length: function (num) {
      return '字数已超过最大限制' + num
    }
  }
  let ruleConfigArr = []
  if (required) {
    ruleConfigArr.push(
      {
        required: true,
        message: err.empty,
        trigger: 'blur'
      }
    )
  }
  if (max) {
    ruleConfigArr.push(
      {
        max: max,
        message: err.length(max),
        trigger: 'change'
      }
    )
    ruleConfigArr.push(
      {
        max: max,
        message: err.length(max),
        trigger: 'blur'
      }
    )
  } else {
    ruleConfigArr.push({
      message: '',
      trigger: 'blur'
    })
    ruleConfigArr.push({
      message: '',
      trigger: 'change'
    })
  }
  if (validator) {
    ruleConfigArr.push({
      trigger: 'blur',
      validator: validator
    })
  }
  if (regx) {
    ruleConfigArr.push({
      trigger: 'blur',
      validator: function (rule, value, cb) {
        if (!regx.test(value)) {
          msg ? cb(new Error(msg)) : cb(new Error(err.format))
        }
        cb()
      }
    })
  }
  if (type) {
    ruleConfigArr.map((item) => {
      item.type = type
    })
  }
  return ruleConfigArr
}

/**
 *时间戳格式化
 * @param date 格式对象 new Date()
 * @param fmt 格式形式 如 yyyy-mm-dd
 * @returns {*}
 */
function formatDateDT (date, fmt) {
  if (!date) return ''
  if (!(date instanceof Date)) {
    try {
      date = new Date(date)
    } catch (error) {
      console.error('时间格式有误，请检查')
    }
  }
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

// 设置table高度
export const tableHeight = function (h) {
  return window.document.body.offsetHeight - h
}

/**
 * 时间段
 * 最近三天
 * 最近一周
 * 最近一个月
 * @returns {*}
 */
export const dateRange = {
  getTree () {
    const end = new Date()
    const start = new Date()
    start.setDate(end.getDate() - 2)
    return [start, end]
  },
  getWeek () {
    const end = new Date()
    const start = new Date()
    start.setDate(end.getDate() - 6)
    return [start, end]
  },
  getMonth () {
    const end = new Date()
    const start = new Date()
    start.setMonth(end.getMonth() - 1)
    return [start, end]
  },
  dateRangeFormat (start, end) {
    if (start && end) {
      start = new Date(start)
      start.setHours(0, 0, 0, 0)
      start = start.toISOString()
      end = new Date(end)
      end.setHours(23, 59, 59, 0)
      end = end.toISOString()
      return {
        startDate: start,
        endDate: end
      }
    }
  }
}

function goToUrl (url, params, target) {
  if (!url) {
    throw new Error('url must be required')
  }
  // url
  if (params && typeof params === 'object') {
    let p = new window.URLSearchParams(params)
    url += url.indexOf('?') > -1 ? '&' : '?'
    url += p.toString()
  }
  function redirect (url) {
    let form = document.createElement('form')
    form.action = url
    form.method = 'get'
    form.target = target || '_blank'
    document.body.appendChild(form)
    form.submit()
    form.remove()
  }
  if (!url.startsWith('http') && !url.startsWith('//')) {
    redirect(url)
  } else {
    if (url.startsWith('//')) {
      url = window.location.protocol + url
    }
    let realUrlObject = new window.URL(url)
    if (realUrlObject.origin === window.location.origin) {
      redirect(realUrlObject.pathname + realUrlObject.search + realUrlObject.hash)
    } else {
      // form
      let form = document.createElement('form')
      form.action = realUrlObject.origin + '/api/redirect' // 地址
      form.method = 'post'
      form.target = target || '_blank'
      // url
      let urlInput = document.createElement('input')
      urlInput.type = 'text'
      urlInput.name = 'url'
      urlInput.value = realUrlObject.href
      // token_value
      let tokenInput = document.createElement('input')
      tokenInput.type = 'text'
      tokenInput.name = 'token_value'
      tokenInput.value = window.sessionStorage.getItem('access_token') || window.localStorage.getItem('access_token')
      let keyInput = document.createElement('input')
      // token_name
      keyInput.type = 'text'
      keyInput.name = 'token'
      keyInput.value = 'access_token'
      form.appendChild(urlInput)
      form.appendChild(tokenInput)
      form.appendChild(keyInput)
      document.body.appendChild(form)
      form.submit()
      form.remove()
    }
  }
}

export default {
  downLoadFile: downLoadFile,
  formItemRuleConfig: formItemRuleConfig,
  formatDateDT: formatDateDT,
  tableHeight: tableHeight,
  dateRange: dateRange,
  listtoTree:listtoTree,
  goToUrl
}
