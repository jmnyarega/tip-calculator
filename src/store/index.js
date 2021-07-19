import Vue from 'vue';
import Vuex from 'vuex';

import calculator from '../lib/calculator';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bill: 0,
    tip: 0,
    custom: 0,
    number: 0,
    tipPerPerson: 0,
    amountPerPerson: 0,
  },
  mutations: {
    setTipPerPerson(state) {
      state.tipPerPerson = calculator({
        bill: state.bill,
        percentage: state.percentage,
        custom: state.custom,
        number: state.number,
      }).tip;
    },
    setAmountPerPerson(state) {
      state.tipPerPerson = calculator({
        bill: state.bill,
        percentage: state.percentage,
        custom: state.custom,
        number: state.number,
      }).amount;
    },
  },
  actions: {
    setTipPerPerson(state) {
      state.commit('setTipPerPerson');
    },
    setAmountPerPerson(state) {
      state.commit('setAmountPerPerson');
    },
  },
  modules: {},
  getters: {
    getBill: (state) => state.bill,
    getTip: (state) => state.tip,
    getCustom: (state) => state.custom,
    getNumber: (state) => state.number,
  },
});
