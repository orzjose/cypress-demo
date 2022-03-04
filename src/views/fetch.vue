<template>
  <div style="padding: 30px 0 0 30px;">
    <button @click="getWeather" cy-data="get-weather-btn">getWeather</button>

    <table style="margin-top: 50px;">
      <tr v-for="(value, key) in weather">
        <td>{{ dict[key] }}</td>
        <td>{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { reactive, readonly } from 'vue'

const weather = reactive({})
const dict = readonly({
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

async function getWeather() {
  const data = await fetch(
    'https://yiketianqi.com/api?unescape=1&version=v6&appid=86246824&appsecret=l2AP18dG'
  ).then((response) => response.json())
  Object.keys(data).forEach((key) => {
    if (dict[key]) {
      weather[key] = data[key]
    }
  })
}
</script>
