import axios from 'axios'
import {
  Message
} from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'
axios.defaults.withCredentials = true

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    }
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    axios(option).then((respons) => {
      if (respons.data.status === 'ok') {
        resolve(respons.data)
        console.log(respons.data)
      } else {
        Message.error(respons.data.msg)
        reject(respons.data)
      }
    }).catch((error) => {
      Message.error('网络异常')
      reject({
        msg: '网络异常'
      })
    })
  })
}
