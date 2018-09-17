<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .col{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .col-all {
    justify-content: space-between;
    flex-grow: 3;
  }

  body {
    background: hsl(143, 100%, 98%);
  }

  .widget {
    margin: 0;
    box-sizing: border-box;
    padding: 0 5%;
    height: 100%;
  }
  .widget.single {
    padding: 5%;
  }

  .content {
    background: white;
    height: 100%;
    border: 2px solid hsl(143, 81%, 91%);
    border-radius: 10px;
  }
  .content.single {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  button {
    background: hsl(143, 100%, 98%);
    padding: 10px;
    border: 2px solid hsl(143, 81%, 91%);
    border-radius: 10px;
    font-size: 2.5vh;
  }

  .left {
    text-align: right;
  }

  .right {
    text-align: left;
    padding-left: 2vw;
  }
</style>
