<template>
  <div class="keyboard">
    <Input
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
        <Button
          v-for="percentage in percentages"
          :key="percentage.key"
          :value="percentage.key"
          :click="() => handleClick(percentage.value)"
          :class="selected(percentage)"
        />
        <Input
          placeholder="Custom"
          :value="String(custom)"
          name="custom"
          @change="handleChange"
        />
      </div>
    </div>
    <div class="people">
      <Input
        label="Number of people"
        icon="icon-person.svg"
        placeholder="0"
        :value="number"
        name="number"
        :error=error
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Input from './Input.vue';
import Button from './Button.vue';

export default {
  components: {
    Input,
    Button,
  },
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
    percent() { return this.getPercent },
    bill() { return this.getBill() },
    custom() { return this.getCustom() },
    number() { return this.getNumber() },
  },
  methods: {
    handleClick(key) {
      this.setPercent(key);
      this.calculate();
      this.validate();
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
    selected(percentage) {
      return percentage.value === this.getPercent()
        ? 'select-tip__cta--selected'
        : '';
    },
    ...mapActions(['calculate', 'setBill', 'setPercent', 'setNumber', 'setCustom']),
    ...mapGetters(['getBill', 'getPercent', 'getNumber', 'getCustom']),
  },
};
</script>

<style lang="scss">
.select-tip {
  margin-top: 38px;

  &__cta {
    margin-top: 22px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    grid-template-areas: "a b";
    @media (min-width: 60em) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    button:hover, button:focus, &--selected {
      background-color: #26C2AE;
      color: #00474B;
    }
  }

  &__text {
    text-transform: capitalize;
    font-weight: var(--fw-bold);
  }

  .custom__input {
    padding: var(--sm-spacer);
  }
}

.people {
  margin-top: 38px;
}
</style>
