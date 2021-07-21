<template>
  <div class="card">
    <Keyboard />
    <Screen />
  </div>
</template>

<script>
import Keyboard from './Keyboard.vue';
import Screen from './Screen.vue';

export default {
  components: {
    Keyboard,
    Screen,
  }
}
</script>

<style lang="scss">
.card {
  max-width: 57.5rem;
  margin-top: 5.375rem;
  border-radius: var(--border-radius);
  background-color: var(--white);
  padding: var(--md-spacer);
  color: var(--dark-grayish-cyan);

  @media (min-width: 40em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }
}
</style>
