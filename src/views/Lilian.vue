<template>
  <div class="lilian-top">
    <div v-for="(item, key) in lilian" :key='key' class="lilian">
    <div>{{item.name}}</div>
    <div>详情</div>
    <div>建议战力：{{item.zhanli}}</div>
    <div>探索时间选择:
      <select name="time">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        </select>  </div>
         <div><button @click="addtimeup(key)">开始探索</button></div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { myAlert } from '../assets/myConsole'
export default {
  name: 'Lilian',
  data: function () {
    return {
      lilian: [
        { name: '宗门周边', zhanli: 4000, lingshi: 4, lingli: 6 },
        { name: '云顶山', zhanli: 30000, lingshi: 16, lingli: 7 }
      ]
    }
  },
  computed: {
    ...mapState(['lingli', 'linglixl', 'julingxl'])
  },
  methods: {
    ...mapMutations(['addtime', 'addN', 'addlinglichi', 'addlingshi']),
    addtimeup: function (key) {
      const a = Number(document.getElementsByName('time')[key].value)
      this.addtime(a)
      const b = (this.julingxl / 100 + 1) * this.linglixl * a
      const c = Math.ceil((Math.random() * this.lilian[key].lingli) * b)
      this.addlinglichi(c)
      const d = this.lilian[key].lingshi * a
      this.addlingshi(d)
      myAlert('你的灵力池增加了' + c + '点灵力' + ',' + '你的灵石增加了' + d)
    }
  }
}
</script>
<style scoped>
.lilian{
  margin: auto;
  margin-bottom: 20px;
  padding: 20px;
  background-color: aquamarine;
  max-width: 800px;
}
.lilian-top{
  padding-left: 20px;
  display: block;
  height: 400px;
  overflow: scroll;
}
</style>
