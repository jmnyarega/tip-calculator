<template>
  <label class="custom">
    <span v-if="label"> {{label}} </span>
    <div class="custom__input">
      <img
        :src="require(`../assets/${icon}`)"
        alt="$"
        v-if="icon"
      />
      <input
        type="number"
        :placeholder="placeholder"
        :value="value"
        @change="change()"
      />
    </div>
  </label>
</template>

<script>

export default {
  props: {
    label: String,
    value: String,
    icon: String,
    placeholder: String,
    change: Function,
  },
};
</script>

<style lang="scss">
.custom {
    &__input {
    margin-top: calc(var(--sm-spacer) / 3);
    padding: var(--sm-spacer);
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;

    border: 2px solid transparent;
    border-radius: calc(var(--border-radius) / 2);
    background-color: var(--v-light-grayish-cyan);
    color: var(--very-dark-cyan);
    font-weight: var(--fw-bold);

    input {
      border: none;
      outline: none;
      text-align: right;
      background-color: inherit;
      color: inherit;

      width: 85%;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      -moz-appearance: none;
    }
    &:focus-within, &:hover {
      border: 2px solid var(--strong-cyan);
    }
  }
}
</style>
