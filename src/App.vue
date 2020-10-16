<template>
  <div id="app">
    <div id="top-nav">
    <div>修炼时长：{{Math.floor((Math.floor($store.state.time/30+1))/12)}}年{{(Math.floor($store.state.time/30+1))%12}}月{{($store.state.time)%30+1}}日</div>
    <div>战力：{{$store.state.zhanli+$store.state.zbzhanli}}</div>
    </div>
    <router-view id="main"/>
    <div class="nav">
      <router-link to="/">个人</router-link> |
      <router-link to="/zongmen">宗门</router-link> |
      <router-link to="/lilian">历练</router-link> |
      <router-link to="/chumo">除魔</router-link> |
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'App',
  mounted () {
    setInterval(
      () => {
        const a = (this.julingxl / 100 + 1) * this.linglixl
        this.addN(a)
      }, 1000
    )
    setInterval(
      () => this.addtime(), 1000
    )
  },
  computed: {
    ...mapState(['jjnum', 'csnum', 'lingli', 'atk', 'def', 'hp', 'mp', 'jjchongshu', 'jingjie', 'zhuangbeival', 'julingxl', 'linglixl'])
  },
  methods: {
    ...mapMutations(['addLingli', 'addN', 'addjj', 'addcsnum', 'addatk', 'adddef', 'addhp', 'addmp', 'addzhanli', 'addtime', 'addzbval', 'addzbzhanli'])
  },
  watch: {
    zhuangbeival: function () {
      const Catk = this.zhuangbeival[0].Catk + this.zhuangbeival[1].Catk + this.zhuangbeival[2].Catk + this.zhuangbeival[3].Catk
      const Jatk = this.zhuangbeival[0].Jatk + this.zhuangbeival[1].Jatk + this.zhuangbeival[2].Jatk + this.zhuangbeival[3].Jatk
      const Cdef = this.zhuangbeival[0].Cdef + this.zhuangbeival[1].Cdef + this.zhuangbeival[2].Cdef + this.zhuangbeival[3].Cdef
      const Jdef = this.zhuangbeival[0].Jdef + this.zhuangbeival[1].Jdef + this.zhuangbeival[2].Jdef + this.zhuangbeival[3].Jdef
      const Jhp = this.zhuangbeival[0].Jhp + this.zhuangbeival[1].Jhp + this.zhuangbeival[2].Jhp + this.zhuangbeival[3].Jhp
      const Jmp = this.zhuangbeival[0].Jmp + this.zhuangbeival[1].Jmp + this.zhuangbeival[2].Jmp + this.zhuangbeival[3].Jmp
      const a = [Catk, Jatk, Cdef, Jdef, Jhp, Jmp]
      this.addzbval(a)
      const zl = (Catk * this.atk + Jatk) * 10 + (Cdef * this.def + Jdef) * 15 + Jhp + Jmp
      this.addzbzhanli(zl)
    },
    lingli: function () {
      if (this.lingli >= this.jingjie[this.jjnum].up) {
        this.addjj()
        const atks = (this.jjnum) * 100 + this.csnum
        const defs = Math.floor(atks * 60 / 100)
        const hps = atks * 10
        const mps = atks * 2
        const zhanlis = atks * 10 + defs * 15 + hps + mps
        this.addatk(atks)
        this.adddef(defs)
        this.addhp(hps)
        this.addmp(mps)
        this.addzhanli(zhanlis)
      }
    },
    csnum: function () {
      const Catk = this.zhuangbeival[0].Catk + this.zhuangbeival[1].Catk + this.zhuangbeival[2].Catk + this.zhuangbeival[3].Catk
      const Jatk = this.zhuangbeival[0].Jatk + this.zhuangbeival[1].Jatk + this.zhuangbeival[2].Jatk + this.zhuangbeival[3].Jatk
      const Cdef = this.zhuangbeival[0].Cdef + this.zhuangbeival[1].Cdef + this.zhuangbeival[2].Cdef + this.zhuangbeival[3].Cdef
      const Jdef = this.zhuangbeival[0].Jdef + this.zhuangbeival[1].Jdef + this.zhuangbeival[2].Jdef + this.zhuangbeival[3].Jdef
      const Jhp = this.zhuangbeival[0].Jhp + this.zhuangbeival[1].Jhp + this.zhuangbeival[2].Jhp + this.zhuangbeival[3].Jhp
      const Jmp = this.zhuangbeival[0].Jmp + this.zhuangbeival[1].Jmp + this.zhuangbeival[2].Jmp + this.zhuangbeival[3].Jmp
      const a = [Catk, Jatk, Cdef, Jdef, Jhp, Jmp]
      this.addzbval(a)
      const zl = (Catk * this.atk + Jatk) * 10 + (Cdef * this.def + Jdef) * 15 + Jhp + Jmp
      this.addzbzhanli(zl)
    }
  }
}
</script>
<style>
#main{
  flex-grow: 1;
}
#top-nav{
  display: flex;
  justify-content: space-around;
  background-color: aliceblue;
}
#app{
  height: 95vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.nav{
    display: flex;
    justify-content: space-around;
}
a{
  text-decoration: none
}
.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
