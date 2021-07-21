<template>
  <main id="app">
    <img src="../assets/logo.svg" alt="tip-calculator - Home" class="logo">
    <Card />
  </main>
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
 --dark-grayish-cyan: hsl(184, 14%, 56%);
 --dark-grayish-cyan-1: #0D686D;
 --light-grayish-cyan: hsl(185, 41%, 84%);
 --v-light-grayish-cyan: hsl(189, 41%, 97%);
 --light-red: #E17457;
 --strong-cyan: hsl(172, 67%, 45%);
 --white: hsl(0, 0%, 100%);

  --fs-small: 0.8125rem;
  --fs-base: 1rem;
  --fs-h2: 1.5rem;
  --fs-h1: 2rem;

  --ff-default: 'Space Mono', monospace;

 --fw-normal: 400;
 --fw-medium: 500;
 --fw-bold: 700;

 --border-radius: 1.5625rem;

  --sm-spacer: 0.875rem;
  --sm-1-spacer: 1rem;
  --sm-2-spacer: 1.375rem;
  --md-spacer: 2.12rem;
  --bg-spacer: 2.625rem;
  --bg-1-spacer: 2.875rem;
  --xl-spacer: 3.125rem;

 background-color: var(--light-grayish-cyan);
 min-height: 100vh;
 font-size: var(--fs-base);
 font-family: var(--ff-default);

 @media (min-width: 60em) {
   display: grid;
   place-items: center;
 }
}

.logo {
  margin: 0 auto;
}
</style>
