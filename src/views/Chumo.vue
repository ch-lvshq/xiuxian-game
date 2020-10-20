<template>
  <div class="chumo-top">
    <div v-if="time<=360">暂无魔物</div>
    <div v-else>魔物入侵,当前血量：{{Math.floor(hp+$store.state.zbval[4]-$store.state.downhp)}}
      <div v-for="(item, key) in mowu" :key="key">
        <div v-if="mowu[key].time<=time" class="chumo">
          <div>{{mowu[key].name}}</div>
          <div>破坏力:{{mowu[key].pohuai}}</div>
          <div>破坏时间：{{mowu[key].pohuaitime}}</div>
          <div>战力值:{{mowu[key].zhanli}}</div>
          <div><button @click="mowujg(key)">进攻</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Chumo',
  computed: {
    ...mapState(['time', 'mowu', 'atk', 'def', 'hp', 'zbval', 'downhp'])
  },
  methods: {
    ...mapMutations(['adddownhp', 'addmoling']),
    mowujg: function (key) {
      const atk = this.atk + this.zbval[0] * this.atk + this.zbval[1]
      const def = this.def + this.zbval[2] * this.def + this.zbval[3]
      const a = this.mowu[key]
      const yh = atk / (2 * a.def + atk) * atk
      const mh = a.atk / (2 * def + a.atk) * a.atk
      const cs = Math.floor(a.hp / yh)
      this.adddownhp(cs * mh)
      if (Math.floor(this.hp + this.$store.state.zbval[4] - this.$store.state.downhp < 0)) {
        alert('GAME OVER')
      }
      this.addmoling(Number(a.moling))
    }
  }
}
</script>
<style scoped>
.chumo{
  margin: auto;
  margin-bottom: 20px;
  padding: 20px;
  background-color: aquamarine;
    max-width: 800px;

}
.chumo-top{
    padding-left: 20px;
  display: block;
  height: 400px;
  overflow: scroll;
}
</style>
