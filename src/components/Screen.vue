<template>
  <div class="screen">

    <!--
      React dangerously equivant to vue's v-html="rawHtml" (XSS) attacks - no sanitization
    -->
    <div class="screen__display">
      <div class="tip">
        <div class="tip__label">
          <p>Tip Amount</p>
          <p>/ person </p>
        </div>
        <div class="tip__amount">{{tip}}</div>
      </div>

      <div class="total">
        <div class="total__label">
          <p>Total</p>
          <p>/ person </p>
        </div>
        <div class="total__amount">{{total}}</div>
      </div>
    </div>

    <div class="screen__cta">
      <Button value="reset" :disabled="disable" @clicked="handleClick" />
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
    // computed properties are cached based on their reactive dependencies.
    tip() { return this.getTip(); },
    total() { return this.getTotal(); },
    disable() {
      return this.tip == 0 && this.total == 0
    },
  },
  methods: {
    // a method invocation will always run the function whenever a re-render happens.
    ...mapGetters(['getTip', 'getTotal']),
    ...mapActions(['reset']),
    handleClick() { this.reset(); },
  },
}
</script>

<style lang="scss">
.screen {
  margin-top: var(--md-spacer);
  border-radius:  0.9375rem;
  background-color: var(--very-dark-cyan);
  padding: var(--bg-spacer);
  @media (min-width: 50em) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 0;
  }

  .tip, .total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__label {
      p:first-child { color: var(--white); }
      p:last-child { font-size: var(--fs-small); }
    }
  }

  .total {
    margin-top: var(--md-spacer);
    &__amount {
      font-size: var(--fs-h1);
      font-weight: var(--fw-bold);
      color: var(--strong-cyan);
    }
    @media (min-width: 50em) {
      margin-top: var(--xl-spacer);
    }
  }

  .tip, .total {
      &__amount {
      display: flex;
      column-gap: 0.05rem;
      align-items: center;

      &::before {
        content: "";
        display: inline-block;
        height: 22px;
        width: 15px;
        background-image: url(../assets/icon-dollar.svg);
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }

  .tip__amount {
    font-size: var(--fs-h1);
    font-weight: var(--fw-bold);
    color: var(--strong-cyan);
  }

  &__cta {
    .button {
      text-transform: uppercase;
      margin-top: var(--md-spacer);
      color: var(--very-dark-cyan);
      background-color: var(--strong-cyan);

      &:disabled {
        background-color: var(--dark-grayish-cyan-1);
      }

      &:hover:enabled, &:focus:enabled {
        color: var(--strong-cyan);
        background-color: var(--very-dark-cyan);
        border: 2px solid var(--strong-cyan);
      }
    }
  }

  &__text {
    text-transform: capitalize;
    font-weight: var(--fw-bold);
  }
}
</style>
