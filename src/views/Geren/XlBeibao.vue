<template>
  <div class="tab-bag">
    <div v-for="(item, key) in beibao" :key='key'>
      <Bag :item='item' :num="key"></Bag>
      <hr/>
    </div>
  </div>
</template>

<script>
import Bag from '../../components/Bag'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'XlBeibao',
  components: {
    Bag
  },
  computed: {
    ...mapState(['beibao'])
  },
  methods: {
    ...mapMutations(['addbeibao']),
    diuqi: function (key) {
      if (confirm('是否丢弃')) {
        this.addbeibao(key)
      }
    }
  }
}
</script>
<style scoped>
.tab-bag{
  padding-left: 20px;
  display: block;
  height: 400px;
  overflow: scroll;
}
@media only screen and (max-width: 600px) {
  .tab-bag{
  font-size: 10px;
  height: 300px;
  }
}
</style>
