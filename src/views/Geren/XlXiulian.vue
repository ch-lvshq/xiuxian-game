<template>
  <div>
    <div>
      <div>境界: {{jingjie[jjnum].name}}{{jjchongshu[csnum]}}</div>
      <div>灵力：{{ Math.ceil(lingli*10)/10 }}/{{jingjie[jjnum].up}}</div>
      <div><el-button type="primary" plain class="xl-but" @click="addLinglia">刻苦修炼</el-button> <How :val="'每次点击会增长一倍修炼速率的灵力值'"></How> </div>
      <div><el-button type="primary" plain class="xl-but" @click="addNa">闭关修炼</el-button><How :val="'每次点击会以两倍修炼速率突破当前境界，消耗对应时间'"></How> </div>
       <div> <el-button type="primary" plain class="xl-but" @click="addNb">灵力池：{{this.linglichi}}</el-button><How :val="'消耗灵力池中灵力，提升当前境界'"></How> </div>
    </div>
    <div>
      <div>攻击力：{{Math.floor(atk+$store.state.zbval[0]*atk+$store.state.zbval[1])}}</div>
      <div>防御力：{{Math.floor(def+$store.state.zbval[2]*def+$store.state.zbval[3])}}</div>
      <div>生命值：{{Math.floor(hp+$store.state.zbval[4]-$store.state.downhp)}}</div>
      <div>法力值：{{Math.floor(mp+$store.state.zbval[5])}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { myAlert } from '../../assets/myConsole'
import How from '../../components/How'
export default {
  name: 'XlXiulian',
  components: {
    How
  },
  computed: {
    ...mapState(['jjnum', 'csnum', 'lingli', 'atk', 'def', 'hp', 'mp', 'jjchongshu', 'jingjie', 'time', 'julingxl', 'linglixl', 'linglichi'])
  },
  methods: {
    ...mapMutations(['addLingli', 'addN', 'addjj', 'addcsnum', 'addatk', 'adddef', 'addhp', 'addmp', 'addzhanli', 'addtime', 'addlinglichi']),
    addLinglia () {
      const a = (this.julingxl / 100 + 1) * this.linglixl
      this.addN(a)
      myAlert('你获得了' + a + '点灵力')
      this.$message('你获得了' + a + '点灵力')
    },
    addNa () {
      const a = this.jingjie[this.jjnum].up - this.lingli
      const c = (this.julingxl / 100 + 1) * this.linglixl
      const b = Math.ceil(a / (2 * c))
      this.addtime(b)
      this.addN(a)
      myAlert('你闭关了' + b + '天，你的境界提升了')
      this.$message('你闭关了' + b + '天，你的境界提升了')
    },
    addNb () {
      const a = this.jingjie[this.jjnum].up - this.lingli
      if (this.linglichi >= a) {
        this.addN(a)
        this.addlinglichi(-a)
        myAlert('你消耗了' + a + '点灵力，你的境界提升了')
        this.$message('你消耗了' + a + '点灵力，你的境界提升了')
      } else {
        myAlert('你的灵力池中灵力不足以提升境界')
        this.$message('你的灵力池中灵力不足以提升境界')
      }
    }
  }
}
</script>
<style scoped>
.xl-but{
  padding: 5px;
}
</style>
