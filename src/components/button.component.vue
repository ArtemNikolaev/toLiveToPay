<template>
    <button v-on:click="$emit('button-clicked')">{{ title }}</button>
</template>

<script>
export default {
  name: 'app-button',
  props: ['title']
}
</script>

<style scoped>
    button {
        background: var(--btn-bg);
        padding: var(--btn-padding);
        border-width: var(--btn-border-width);
        border-style: var(--btn-border-style);
        border-color: var(--btn-border-color);
        border-radius: var(--btn-border-radius);
        font-size: var(--btn-font-size);
    }
</style>
