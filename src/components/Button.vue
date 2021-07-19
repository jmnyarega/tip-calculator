<template>
  <button @click="click()">
    {{value}}
  </button>
</template>

<script>

export default {
  props: {
    value: String,
    click: Function,
  },
};
</script>

<style lang="scss">
button {
  color: var(--white);
  text-align: center;
  font-weight: var(--fw-bold);
  border: none;
  outline: none;

  display: block;
  width: 100%;
  padding: calc(var(--sm-spacer) / 2);
  border: 2px solid transparent;
  border-radius: calc(var(--border-radius) / 2);
  background-color: var(--very-dark-cyan);
  margin-top: calc(var(--sm-spacer) / 2);

  cursor: pointer;

  &:hover, &:focus {
    background-color: var(--strong-cyan);
  }
}
</style>
