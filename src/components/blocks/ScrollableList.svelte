<style>
  .container {
    height: 100%;
    overflow: hidden;
  }

  .content{
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
</style>

<div class='container'>
  <div class="content">
    <slot name='list' />
  </div>
</div>
