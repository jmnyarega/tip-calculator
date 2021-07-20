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
  margin-top: 39px;
  border-radius: var(--border-radius);
  background-color: var(--white);
  padding: var(--bg-spacer);
  color: #5E7A7D;

  @media (min-width: 50em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
}
</style>
