<template>
    <article v-bind:class="[height, padding]">
        <slot></slot>
    </article>
</template>

<script>
export default {
  name: 'widget',
  props: ['height', 'padding']
}
</script>

<style scoped>
    article {
        margin: 0;
        box-sizing: border-box;
        padding: 0 5%;
    }

    .forty {
        height: 40vh;
    }

    .thirty {
        height: 30vh;
    }

    .top {
        padding-top: 5%;
    }

    .bottom {
        padding-top: 5%;
        padding-bottom: 5%;
    }
</style>
