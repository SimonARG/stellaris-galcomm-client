<template>
  <div class="text-xl">Hi, Loser</div>
  <div class="font-mono text-xl">Hi, Loser</div>
  <div class="font-orbit text-xl">Hi, Loser</div>
  <div class="font-game text-xl">Hi, Loser</div>
  <div>{{ test }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TestService from '@/services/test-service'

let test = ref()

onMounted(() => {
  get()
})

async function get() {
  try {
    let response = await TestService.test()

    if (response.status == 200) {
      test.value = response.data.data
    }
  } catch (error) {
    console.log(error)
  }
}
</script>