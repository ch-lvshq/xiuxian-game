import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jjchongshu: [
      '一层', '二层', '三层', '四层', '五层', '六层', '七层', '八层', '九层', '大圆满'
    ],
    jingjie:
  [
    {
      id: 0,
      name: '凡胎',
      up: 10
    },
    {
      id: 1,
      name: '练气',
      up: 100
    },
    {
      id: 2,
      name: '筑基',
      up: 2000
    },
    {
      id: 3,
      name: '金丹',
      up: 40000
    },
    {
      id: 4,
      name: '元婴',
      up: 800000
    },
    {
      id: 5,
      name: '未知境界',
      up: 800000
    },
    {
      id: 6,
      name: '未知境界',
      up: 800000
    },
    {
      id: 7,
      name: '未知境界',
      up: 800000
    },
    {
      id: 8,
      name: '未知境界',
      up: 800000
    }
  ],
    jjnum: 0,
    csnum: 0,
    lingli: 0,
    linglixl: 1,
    atk: 0,
    def: 0,
    hp: 0,
    mp: 0,
    zbval: [0, 0, 0, 0, 0, 0],
    zbzhanli: 0,
    zhanli: 0,
    time: 0,
    beibao: [{ name: '朱雀剑', type: 1, use: { Catk: 0.15, Jatk: 0, Cdef: 0, Jdef: 10, Jhp: 0, Jmp: 0 }, value: '增加当前15%攻击力，10点防御力' }, { name: '玄武履', type: 2, use: { Catk: 0, Jatk: 10, Cdef: 0.10, Jdef: 0, Jhp: 0, Jmp: 0 }, value: '增加当前10点攻击力，10%防御力' }, { name: '青龙衣', type: 3, use: { Catk: 0.05, Jatk: 0, Cdef: 0.10, Jdef: 10, Jhp: 0, Jmp: 0 }, value: '增加当前5%攻击力，10%防御力' }, { name: '白虎宝', type: 4, use: { Catk: 0.10, Jatk: 0, Cdef: 0.05, Jdef: 10, Jhp: 0, Jmp: 0 }, value: '增加当前10%攻击力，5%防御力' }, { name: '轩辕剑', type: 1, use: { Catk: 1, Jatk: 0, Cdef: 0, Jdef: 0, Jhp: 0, Jmp: 0 }, value: '增加当前100%攻击力' }],
    zhuangbei: ['', '', '', ''],
    zhuangbeival: [{ Catk: 0, Jatk: 0, Cdef: 0, Jdef: 0, Jhp: 0, Jmp: 0 }, { Catk: 0, Jatk: 0, Cdef: 0, Jdef: 0, Jhp: 0, Jmp: 0 }, { Catk: 0, Jatk: 0, Cdef: 0, Jdef: 0, Jhp: 0, Jmp: 0 }, { Catk: 0, Jatk: 0, Cdef: 0, Jdef: 0, Jhp: 0, Jmp: 0 }],
    huzonglv: '-1',
    huzonghj: 0,
    julinglv: '-1',
    julingxl: 0,
    lingshi: 10000000,
    moling: 50000,
    lingdan: 50000,
    linglichi: 0,
    mowu: [
      { name: '初级魔物', pohuai: '1', zhanli: '20000', key: 0, time: 360, atk: 800, def: 500, hp: 2000, moling: 5 },
      { name: '中级魔物', pohuai: '2', zhanli: '40000', key: 1, time: 1800, atk: 1500, def: 800, hp: 6000, moling: 25 },
      { name: '高级魔物', pohuai: '5', zhanli: '80000', key: 2, time: 3600, atk: 2800, def: 1300, hp: 12000, moling: 50 },
      { name: '特级魔物', pohuai: '10', zhanli: '200000', key: 3, time: 7200, atk: 4000, def: 5500, hp: 22000, moling: 100 },
      { name: '王级魔物', pohuai: '20', zhanli: '400000', key: 4, time: 36000, atk: 10000, def: 6000, hp: 42000, moling: 500 },
      { name: '皇级魔物', pohuai: '50', zhanli: '800000', key: 5, time: 180000, atk: 22000, def: 8000, hp: 502000, moling: 2500 }
    ],
    downhp: 0,
    hjph: 0
  },
  mutations: {
    addLingli (state) {
      state.lingli++
    },
    addN (state, step) {
      state.lingli += step
    },
    addjj (state) {
      if (state.csnum < 10) {
        state.lingli = 0
        state.csnum++
      }
      if (state.csnum === 10) {
        state.lingli = 0
        state.csnum = 0
        state.jjnum++
      }
    },
    addatk (state, num) {
      state.atk += num
    },
    adddef (state, num) {
      state.def += num
    },
    addhp (state, num) {
      state.hp += num
    },
    addmp (state, num) {
      state.mp += num
    },
    addzhanli (state, num) {
      state.zhanli += num
    },
    addtime (state, num) {
      if (num) {
        state.time += num
      }
      state.time++
    },
    addzhuangbei (state, num) {
      state.zhuangbei.splice(num[0] - 1, 1, num[1])
    },
    addbeibao (state, num) {
      state.beibao.splice(num, 1)
    },
    addmuch (state, num) {
      state.beibao[num].much--
    },
    addallzhanli (state, num) {
      state.allzhanli += num
    },
    addzhuangbeival (state, num) {
      state.zhuangbeival.splice(num[0], 1, num[1])
    },
    addzbval (state, num) {
      state.zbval = num
    },
    addzbzhanli (state, num) {
      state.zbzhanli = num
    },
    addhuzonglv (state) {
      state.huzonglv++
    },
    addlingshi (state, num) {
      state.lingshi += num
    },
    addmoling (state, num) {
      state.moling += num
    },
    addlingdan (state, num) {
      state.lingdan += num
    },
    addhuzonghj (state, num) {
      state.huzonghj = num
    },
    addjulinglv (state) {
      state.julinglv++
    },
    addjulingxl (state, num) {
      state.julingxl = num
    },
    addlinglichi (state, num) {
      state.linglichi += num
    },
    adddownhp (state, num) {
      state.downhp += num
    },
    addhuzonghjN (state, num) {
      state.huzonghj += num
    },
    addhjph (state, num) {
      state.hjph = num
    }
  },
  actions: {
    addAsync (text, time) {
      setTimeout(() => {
        text.commit('add')
      }, time)
    }
  },
  getters: {

  },
  modules: {
  }
})
