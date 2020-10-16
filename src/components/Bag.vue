<template>
    <div>{{item.name}} | {{item.value}}
      <button v-if="item.type<=4&&$store.state.zhuangbei[item.type-1]!==item.name" @click="zhuangbei">装备</button>
      <span v-if="item.type==='消耗品'">{{ item.much }}</span>
      <button v-if="item.type==='消耗品'" @click="shiyong(num)">使用</button>
      <button v-if="item.type<=4&&$store.state.zhuangbei[item.type-1]===item.name" disabled>已装备</button>
      <button v-if="item.type<=4&&$store.state.zhuangbei[item.type-1]===item.name" @click="xiexia">卸下</button>
      <button @click="diuqi(num)" v-if="$store.state.zhuangbei[item.type-1]!==item.name">丢弃</button>
     </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Bag',
  props: ['item', 'num'],
  computed: {
    ...mapState(['zhuangbeival', 'atk', 'def', 'hp', 'mp'])
  },
  methods: {
    ...mapMutations(['addwuqi', 'addxielv', 'addyifu', 'addzhuangbei', 'addbeibao', 'addmuch', 'addzhuangbeival']),
    zhuangbei: function () {
      const a = [this.item.type, this.item.name]
      this.addzhuangbei(a)
      const b = [this.item.type - 1, this.item.use]
      this.addzhuangbeival(b)
    },
    xiexia: function () {
      const a = [this.item.type, '']
      this.addzhuangbei(a)
      const b = [this.item.type - 1, { Catk: 0, Jatk: 0, Cdef: 0, Jdef: 0, Jhp: 0, Jmp: 0 }]
      this.addzhuangbeival(b)
    },
    shiyong: function (num) {
      this.addmuch(num)
      if (this.$store.state.beibao[num].much <= 0) {
        this.addbeibao(num)
      }
    },
    diuqi: function (num) {
      if (confirm('是否丢弃')) {
        this.addbeibao(num)
      }
    }
  }
}
</script>
