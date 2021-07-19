<template>
  <div class="card">
    <Input
      label="Bill"
      icon="icon-dollar.svg"
      placeholder="0"
      :change="handleChange"
    />
    <div class="tip">
      <p class="tip__text">Select tip %</p>
      <div class="tip__cta">
        <Button
          v-for="percentage in percentages"
          :key="percentage.key"
          :value="percentage.key"
          :click="() => handleClick(percentage.value)"
        />
        <Input
          :value="bill"
          placeholder="Custom"
          :change="handleChange"
        />
      </div>
    </div>

    <div class="people">
      <Input
        label="Number of people"
        :value="number"
        icon="icon-person.svg"
        placeholder="0"
        :change="handleChange"
      />
    </div>
  </div>
</template>

<script>
import Input from './Input.vue';
import Button from './Button.vue';

export default {
  components: {
    Input,
    Button,
  },
  data() {
    return {
      bill: '',
      custom: '',
      percentage: 0,
      number: '',
      percentages: [
        { key: '5%', value: 5 },
        { key: '10%', value: 10 },
        { key: '15%', value: 15 },
        { key: '25%', value: 25 },
        { key: '50%', value: 50 },
      ],
    };
  },
  methods: {
    handleClick(key) {
      this.percentage = key;
      const {
        percentage,
        number,
        custom,
        bill,
      } = this;
      console.log(percentage, number, custom, bill);
    },
    handleChange(evt) {
      console.log('here...', evt);
    },
  },
};
</script>

<style lang="scss">
.card {
  margin-top: var(--bg-spacer);
  border-radius: var(--border-radius);
  background-color: var(--white);
  padding: var(--bg-spacer);
}

.tip {
  margin-top: var(--bg-spacer);

  &__cta {
    margin-top: var(--sm-spacer);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: baseline;
    grid-gap: var(--sm-spacer);
    grid-template-areas: "a b";
  }

  &__text {
    text-transform: capitalize;
  }

  .custom__input {
    padding: calc(
    calc(var(--sm-spacer) / 2) - 0.15rem
    )
  }
}

.people {
  margin-top: var(--bg-spacer);
}
</style>
