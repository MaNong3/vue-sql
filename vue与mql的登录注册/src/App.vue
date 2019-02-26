<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color:#000;
    user-select: none;
  }
  #app {
    width:100%;
    min-height: 626px;
    background-image: url("../static/img/348288@1519136267@2.png");
    background-size: cover;
    position: relative;
  }
</style>
