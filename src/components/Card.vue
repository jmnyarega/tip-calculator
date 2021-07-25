<template>
  <div class="calculator">
    <keyboard />
    <screen />
  </div>
</template>

<script>
import keyboard from './Keyboard.vue';
import screen from './Screen.vue';

export default {
  components: {
    keyboard,
    screen,
  }
}
</script>

<style lang="scss">
.calculator {
  max-width: 57.5rem;
  margin-top: 5rem;
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
