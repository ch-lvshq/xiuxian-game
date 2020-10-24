<template>
      <el-popover
    placement="bottom"
    trigger="click"
 >{{val}}
    <el-button slot="reference" id="how-but">?</el-button>
  </el-popover>
</template>
<script>
export default {
  name: 'How',
  props: ['val']
}
</script>
<style scoped>
#how-but{
    padding: 4px;
}
</style>
