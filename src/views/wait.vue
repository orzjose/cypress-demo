<template>
  <div cy-data="user">{{ user.name }}</div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
const user = reactive({ name: '' })

function getUser() {
  setTimeout(() => {
    user.name = '张三'
  }, 2000)
}

onMounted(() => {
  getUser()

})


</script>
