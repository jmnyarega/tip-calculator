<template>
  <button :disabled=disabled class="button" @click="click()">
    {{value}}
  </button>
</template>

<script>

export default {
  props: {
    value: String,
    click: Function,
    disabled: Boolean,
  },
};
</script>

<style lang="scss">
.button {
  color: var(--white);
  text-align: center;
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  font-family: inherit;
  border: none;
  outline: none;

  display: block;
  width: 100%;
  padding: calc(var(--sm-spacer));
  border: 2px solid transparent;
  border-radius: calc(var(--border-radius) / 3);
  background-color: var(--very-dark-cyan);

  cursor: pointer;

  transition: all 350ms linear;

  &:hover, &:focus {
    background-color: var(--strong-cyan);
  }
}


</style>
