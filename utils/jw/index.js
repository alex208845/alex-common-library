import convert from './convert'
import common from './common'
import utils from './utils'
import is from './is'
import regExp from './regExp'

let jw = {}

jw.regExp = regExp
jw.convert = convert
jw.utils = utils
jw.is = is
jw.common = common

if (window) {
  window.jw = jw
}
