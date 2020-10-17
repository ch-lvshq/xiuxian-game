<template>
  <div>
    <div v-if="time<=360">暂无魔物</div>
    <div v-else>魔物入侵</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Chumo',
  computed: {
    ...mapState(['time'])
  }
}
</script>
