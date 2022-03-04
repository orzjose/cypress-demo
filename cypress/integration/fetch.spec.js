describe('fetch', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fetch')
  })
  it('happy path', () => {
    cy.intercept('GET', 'https://yiketianqi.com/api?unescape=1&version=v6&appid=86246824&appsecret=l2AP18dG', (req) => {

      // 将请求发送到目标服务器
      // req.reply() // req.reply(res => res)
      // // 拦截请求，直接返回 将这个 JSON 对象响应请求
      req.reply({
        date: '当前日期',
        week: '当前星期',
        update_time: '气象台更新时间',
        city: '城市名称',
        wea: '天气情况',
        tem: '实时温度',
        tem1: '高温',
        tem2: '低温',
        win_meter: '风速'
      })

      // // 将请求发送到目标服务器, 并且拦截服务器返回的实际响应, 然后进行后续操作(类似抓包工具对响应打断点)
      // req.reply((res) => {
      //   return res
      // })
    })

    cy.get('[cy-data="get-weather-btn"]').click()

    cy.request({
      method: 'get',
      url: 'https://yiketianqi.com/api?unescape=1&version=v6&appid=86246824&appsecret=l2AP18dG'
    }).then(response => {
      console.log(response)
    })
  })
})
