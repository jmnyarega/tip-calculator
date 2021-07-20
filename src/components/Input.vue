<template>
  <label class="custom">
    <div class="info">
      <span v-if="label" class="label"> {{label}} </span>
      <span v-if="error" class="error">{{error}}</span>
    </div>
    <div class="custom__input" :class=errors>
      <img
        v-if="icon"
        :src="require(`../assets/${icon}`)"
        alt="$"
      >
      <input
        min="0"
        type="number"
        required
        :value="value"
        :placeholder="placeholder"
        :name="name"
        @change="handleChange"
      >
    </div>
  </label>
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
    .info {
      display: flex;
      justify-content: space-between;
      .span { padding-bottom: 12px; }
      .error { color: #E17457; }
    }
    &__input {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;

    border: 2px solid transparent;
    border-radius: calc(var(--border-radius) / 2);
    background-color: #F3F9FA;
    color: var(--very-dark-cyan);
    font-weight: var(--fw-bold);

    input {
      font-size: var(--fs-h3);
      font-weight: inherit;
      font-family: inherit;
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
    &:not(.custom__input--error):focus-within,
    &:not(.custom__input--error):hover {
      border: 2px solid var(--strong-cyan);
    }

    &--error {
      border: 2px solid #E17457;
    }
  }
}
</style>
