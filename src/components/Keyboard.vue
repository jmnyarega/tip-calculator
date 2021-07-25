<template>
  <div class="keyboard">
    <custom_input
      label="Bill"
      icon="icon-dollar.svg"
      name="bill"
      :value=bill
      placeholder="0"
      @change="handleChange"
    />
    <div class="select-tip">
      <p class="select-tip__text">Select tip %</p>
      <div class="select-tip__cta">
        <custom_button
          v-for="percentage in percentages"
          :key="percentage.key"
          :value="percentage.key"
          :class="{'select-tip__cta--selected': selected(percentage.value)}"
          @clicked="handleClick(percentage.value)"
        />
        <custom_input
          placeholder="Custom"
          :value="custom"
          name="custom"
          @change="handleChange"
        />
      </div>
    </div>
    <custom_input
      label="Number of people"
      icon="icon-person.svg"
      placeholder="0"
      :value="number"
      :error=error
      name="number"
      @change="handleChange"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import custom_input from './Input.vue';
import custom_button from './Button.vue';

export default {
  components: {
    custom_input,
    custom_button,
  },
  beforeUpdate() { console.log("before update") }, // before state update
  updated() { console.log("updated") }, // on state update
  destroyed() { console.log('destroyed...') }, // called if the app is killed.
  data() {
    return {
      error: '',
      percentages: [
        { key: '5%', value: 5 },
        { key: '10%', value: 10 },
        { key: '15%', value: 15 },
        { key: '25%', value: 25 },
        { key: '50%', value: 50 },
      ],
    };
  },
  computed: {
    percent() { return this.getPercent() },
    bill() { return this.getBill() },
    custom() { return this.getCustom() },
    number() { return this.getNumber() },
  },
  methods: {
    handleClick(key) {
      this.setPercent(key);
      this.validate();
      this.calculate();
    },
    validate() {
      if (+this.number <= 0) this.error = 'Can\'t be zero';
      else this.error = '';
    },
    handleChange(name, value) {
      if (name === 'bill') this.setBill(value);
      if (name === 'custom') this.setCustom(value);
      if (name === 'number') this.setNumber(value);
      if (name === 'number' || name === 'custom') this.validate();
      this.calculate();
    },
    ...mapActions([
      'calculate',
      'setBill',
      'setPercent',
      'setNumber',
      'setCustom',
    ]),
    ...mapGetters(['getBill', 'getPercent', 'getNumber', 'getCustom']),
    selected(value) { return value === this.percent; },
  },
};
</script>

<style lang="scss">
.keyboard {
  .select-tip {
    margin: var(--bg-spacer) 0 var(--bg-1-spacer);

    &__cta {
      margin-top: var(--sm-2-spacer);
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: var(--sm-1-spacer);
      align-items: center;
      @media (min-width: 60em) {
        grid-template-columns: repeat(3, 1fr);
      }

      button:hover, button:focus, &--selected {
        background-color: var(--strong-cyan);
        color: var(--very-dark-cyan);
      }
    }

    &__text {
      text-transform: capitalize;
      font-weight: var(--fw-bold);
    }
  }
}
</style>
