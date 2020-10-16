<template>
  <div>
    <div id="per">
      <div class="flex-row">
        <div class="flex-col">
          <div class="tab">武器:{{$store.state.zhuangbei[0]}}</div>
          <div class="tab">鞋履:{{$store.state.zhuangbei[1]}}</div>
        </div>
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1481013147,3320631705&fm=26&gp=0.jpg" alt="">
        <div class="flex-col">
          <div class="tab">衣服:{{$store.state.zhuangbei[2]}}</div>
          <div class="tab">法宝:{{$store.state.zhuangbei[3]}}</div>
        </div>
      </div>
    </div>
    <div>
      <router-view class="down flex-row"></router-view>
      <div class="nav down">
        <router-link to="/XlXiulian">修炼</router-link> |
        <router-link to="/beibao">背包</router-link> |
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Geren',
  components: {
  }
}
</script>
<style>
#per{
  background-color: antiquewhite;
  max-width: 800px;
  margin: auto;

}
#per img{
  height: 15rem;
  width: 30rem;
}
.flex-row{
  display: flex;
  justify-content: space-around;
}
.flex-col{
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}
.tab{
  height: 7rem;
  width: 7rem;
  border: 1px red solid;
}
.down{
  max-width: 800px;
  margin: auto;
  margin-top: 20px;
  line-height: 2em;
}
@media only screen and (max-width: 800px) {
#per img{
  width: 400px;
  height: 200px;
}
@media only screen and (max-width: 600px) {
#per img{
  width: 300px;
  height: 150px;
}
}
}
@media only screen and (max-width: 400px) {
#per img{
  width: 120px;
  height: 60px;
}
}
</style>
