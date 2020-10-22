<template>
<div>
  <div class="flex-row">
  <div>灵石：{{this.lingshi}}</div>
  <div>魔灵：{{this.moling}}</div>
  <div>灵丹：{{this.lingdan}}</div></div>
  <div class="flex-col zongmen">
    <div class="zmzf">
      <div v-if="this.huzonglv!=='-1'">
      <div>护宗大阵</div>
      <div>lv:{{huzong[this.huzonglv].lv}}</div>
      <div>护甲值：{{this.huzonghj}}/{{huzong[this.huzonglv].hj}}</div>
      <div>升级消耗：
        <ul>
          <li v-for="(val, key) in  huzong[this.huzonglv].xiaohao" :key='key' >{{key}}:{{val}}</li>
        </ul>
        </div>
      <button @click="huzongup" v-if="this.huzonglv<5">升级</button>
      <button @click="huzongnew">修复</button>
    </div><div v-else> <button @click="usehuzong">修建护宗大阵</button> </div></div>
    <div class="zmzf" style="background-color: #aaaaaa">
      <div v-if="this.julinglv!=='-1'">
      <div>聚灵大阵</div>
      <div>lv:{{juling[this.julinglv].lv}}</div>
      <div>修炼效率加成：{{this.julingxl}}</div>
      <div>升级消耗：
        <ul>
          <li v-for="(val, key) in  juling[this.julinglv].xiaohao" :key='key' >{{key}}:{{val}}</li>
        </ul>
        </div>
      <button @click="julingup" v-if="this.julinglv<5">升级</button>
    </div><div v-else> <button @click="usejuling">修建聚灵大阵</button> </div>
    </div>
    <div class="zmzf">宗门领地</div>
  </div>
</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { myAlert } from '../assets/myConsole'
export default {
  name: 'Zongmen',
  data: function () {
    return {
      huzong: [
        { lv: 1, hj: 100, xiaohao: { lingshi: 100, moling: 15 } },
        { lv: 2, hj: 200, xiaohao: { lingshi: 500, moling: 50 } },
        { lv: 3, hj: 500, xiaohao: { lingshi: 2000, moling: 150 } },
        { lv: 4, hj: 1000, xiaohao: { lingshi: 10000, moling: 500 } },
        { lv: 5, hj: 2000, xiaohao: { lingshi: 50000, moling: 1200 } },
        { lv: 6, hj: 5000, xiaohao: { lingshi: 100000, moling: 2500 } }
      ],
      juling: [
        { lv: 1, xl: 10, xiaohao: { lingshi: 100, lingdan: 15 } },
        { lv: 2, xl: 20, xiaohao: { lingshi: 500, lingdan: 50 } },
        { lv: 3, xl: 50, xiaohao: { lingshi: 2000, lingdan: 150 } },
        { lv: 4, xl: 100, xiaohao: { lingshi: 10000, lingdan: 500 } },
        { lv: 5, xl: 200, xiaohao: { lingshi: 50000, lingdan: 1200 } },
        { lv: 6, xl: 500, xiaohao: { lingshi: 100000, lingdan: 2500 } }
      ]
    }
  },
  computed: {
    ...mapState(['huzonglv', 'lingshi', 'moling', 'huzonghj', 'lingdan', 'julinglv', 'julingxl'])
  },
  methods: {
    ...mapMutations(['addhuzonglv', 'addlingshi', 'addmoling', 'addhuzonghj', 'addlingdan', 'addjulinglv', 'addjulingxl', 'addhuzonghjN']),
    huzongup: function () {
      const a = this.huzong[this.huzonglv].xiaohao
      if (this.lingshi >= a.lingshi && this.moling >= a.moling) {
        this.addlingshi(-a.lingshi)
        this.addmoling(-a.moling)
        this.addhuzonglv()
        this.addhuzonghj(this.huzong[this.huzonglv].hj)
      } else {
        myAlert('你的材料不足')
      }
    },
    huzongnew: function () {
      const a = this.huzong[this.huzonglv].hj
      const b = a - this.huzonghj
      if (this.moling >= b) {
        this.addmoling(-b)
        this.addhuzonghjN(b)
        myAlert('你消耗了' + b + '魔灵，修复了护宗大阵')
      } else {
        myAlert('你的魔灵不足')
      }
    },
    julingup: function () {
      const a = this.juling[this.julinglv].xiaohao
      if (this.lingshi >= a.lingshi && this.lingdan >= a.lingdan) {
        this.addlingshi(-a.lingshi)
        this.addlingdan(-a.lingdan)
        this.addjulinglv()
        this.addjulingxl(this.juling[this.julinglv].xl)
      } else {
        myAlert('你的材料不足')
      }
    },
    usehuzong: function () {
      this.addhuzonglv()
      this.addhuzonghj(this.huzong[0].hj)
    },
    usejuling: function () {
      this.addjulinglv()
      this.addjulingxl(this.juling[0].xl)
    }
  }
}
</script>
<style scoped>
.zongmen{
  height: 90%;
  margin: auto;
  max-width: 800px;
}
.zmzf{
  flex-grow: 1;
  background-color: aqua;
  margin: 10px;
  padding: 10px;
}
</style>
