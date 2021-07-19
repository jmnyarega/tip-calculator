<template>
  <div class="body" id="app">
    <img src="../assets/logo.svg" alt="tip-calculator - Home" class="logo">
    <Card />
  </div>
</template>

<script>
import Card from '../components/Card.vue';

import '../css/index.css';

export default {
  name: 'Home',
  components: {
    Card,
  },
};
</script>

<style lang="scss">
body {
 --very-dark-cyan: hsl(183, 100%, 15%);
 --dark-grayish-cyan: hsl(186, 14%, 43%);
 --dark-grayish-cyan: hsl(184, 14%, 56%);
 --light-grayish-cyan: hsl(185, 41%, 84%);
 --v-light-grayish-cyan: hsl(189, 41%, 97%);
 --strong-cyan: hsl(172, 67%, 45%);
 --white: hsl(0, 0%, 100%);

 --fs-base: 1.5rem;
 --fs-h3: 2rem;
 --fs-h2: 2.5rem;

 --ff-default: 'Space Mono', monospace;

 --fw-normal: 400;
 --fw-medium: 500;
 --fw-bold: 700;

 --border-radius: 1rem;
 --sm-spacer: 1rem;
 --bg-spacer: 2.5rem;

 background-color: var(--light-grayish-cyan);
 min-height: 100vh;

 max-width: 100em;
 margin: 5rem auto;
}

.body {
  font-size: var(--fs-base);
  font-family: var(--ff-default);
}

.logo {
  text-align: center;
  width: auto;
  margin: 0 auto;
}
</style>
