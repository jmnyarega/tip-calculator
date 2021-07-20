<template>
  <div class="screen">

    <div>
      <div class="tip">
        <div class="tip__label">
          <p>Tip Amount</p>
          <p>/ person </p>
        </div>
        <div class="tip__amount">${{tip}}</div>
      </div>

      <div class="total">
        <div class="total__label">
          <p>Total</p>
          <p>/ person </p>
        </div>
        <div class="total__amount">${{total}}</div>
      </div>
    </div>

    <div class="screen__cta">
      <Button value="reset" :disabled="disable" :click="handleClick" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Button from './Button.vue';

export default {
  components: {
    Button,
  },
  computed: {
    tip() { return this.getTip(); },
    total() { return this.getTotal(); },
    disable() {
      return this.tip == 0 && this.total == 0
    },
  },
  methods: {
    ...mapGetters(['getTip', 'getTotal']),
    ...mapActions(['reset']),
    handleClick() { this.reset(); },
  },
}
</script>

<style lang="scss">
.screen {
  margin-top: 32px;
  border-radius:  15px;
  background-color: var(--very-dark-cyan);
  padding: 32px;
  color: #5E7A7D;
  @media (min-width: 50em) {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .tip, .total {
    display: flex;
    justify-content: space-between;

    &__label {
      p:first-child { color: var(--white); }
      p:last-child { font-size: var(--fs-small); }
    }
  }

  .total {
    margin-top: 30px;
    &__amount {
      font-size: var(--fs-h2);
      font-weight: var(--fw-bold);
      color: #26C2AE;
    }
    @media (min-width: 50em) {
      margin-top: 62px;
    }
  }

  .tip__amount {
    font-size: var(--fs-h2);
    font-weight: var(--fw-bold);
    color: #26C2AE;
  }

  &__cta {
    grid-area: d;
    .button {
      text-transform: uppercase;
      margin-top: 22px;
      color: #00474B;
      background-color: #26C2AE;
      &:disabled {
        background-color: #0D686D;
      }

      &:hover:enabled, &:focus:enabled {
        color: #26C2AE;
        background-color: #00474B;
        border: 2px solid #26C2AE;
      }
    }
  }

  &__text {
    text-transform: capitalize;
    font-weight: var(--fw-bold);
  }
}
</style>
