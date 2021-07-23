<template>
  <button :disabled=disabled class="button" @click="clicked">
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
  methods: {
    clicked() { this.$emit('clicked'); },
  },
};
</script>

<style lang="scss">
.button {
  color: var(--white);
  text-align: center;
  font-size: var(--fs-h2);
  font-weight: var(--fw-bold);
  font-family: inherit;
  border: none;
  outline: none;

  display: block;
  width: 100%;
  padding: calc(var(--sm-1-spacer) / 4);
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
