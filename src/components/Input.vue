<template>
  <div class="custom">
    <div class="custom__label">
      <label v-if="label" class="label" :for="name"> {{label}} </label>
      <span v-if="error" class="error">{{error}}</span>
    </div>
    <div class="custom__input" :class=errors>
      <img
        v-if="icon"
        :src="require(`../assets/${icon}`)"
        alt="$"
      >
      <input
        :id="name"
        min="0"
        type="number"
        required
        :value="value"
        :placeholder="placeholder"
        :name="name"
        @change="handleChange"
      >
    </div>
  </div>
</template>

<script>

export default {
  model: {
    event: 'change',
    prop: 'modelValue',
  },
  props: {
    label: String,
    icon: String,
    placeholder: String,
    name: String,
    value: String,
    error: String,
    modelValue: {
      default: '',
    },
  },
  computed: {
    errors() {
      return this.error ? 'custom__input--error' : '';
    }
  },
  methods: {
    handleChange(evt) {
      this.$emit('change', evt.target.name, evt.target.value);
    },
  },
};
</script>

<style lang="scss">
.custom {
    font-weight: var(--fw-bold);

    &__label {
      display: flex;
      justify-content: space-between;
      .span { padding-bottom: var(--sm-spacer); }
      .error { color: var(--light-red); }
    }

    &__input {
      padding: calc(var(--sm-1-spacer) / 5) var(--sm-spacer);
      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 2px solid transparent;
      border-radius: calc(var(--border-radius) / 3);
      background-color: var(--v-light-grayish-cyan);
      color: var(--very-dark-cyan);
      font-weight: var(--fw-bold);

      input {
        font-size: var(--fs-h2);
        font-weight: inherit;
        font-family: inherit;
        border: none;
        outline: none;
        text-align: right;
        background-color: inherit;
        color: inherit;
        appearance: none;

        width: 85%;
        
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        -moz-appearance: textfield;
      }

      &:not(.custom__input--error):focus-within,
      &:not(.custom__input--error):hover {
        border: 2px solid var(--strong-cyan);
      }

      &--error {
        border: 2px solid var(--light-red);;
      }
    }
}
</style>
