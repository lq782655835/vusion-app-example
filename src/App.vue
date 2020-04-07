<template>
  <div id="app">
    <u-linear-layout>
      <u-text size="small">小号文本</u-text>
      <u-text size="normal">正常文本</u-text>
      <u-text size="large">大号文本</u-text>
      <u-text size="huge">特大号文本</u-text>
      <u-text style="font-size: 26px;">自定义大小</u-text>
    </u-linear-layout>
  </div>
</template>
<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
