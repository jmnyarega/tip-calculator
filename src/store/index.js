import Vue from "vue";
import Vuex from "vuex";

import { tipCalc as calculator, format } from "../lib/calculator";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tip: 0,
    total: 0,
    percentage: 0,
    bill: undefined,
    custom: undefined,
    number: undefined
  },
  mutations: {
    setAmount(state) {
      const { bill, number, custom, percentage } = state;
      if (bill > 0 && number > 0 && (custom > 0 || percentage)) {
        state.total = calculator(state)?.amount;
        state.tip = calculator(state)?.tip;
      } else {
        state.total = 0;
        state.tip = 0;
      }
    },
    reset(state) {
      state.tip = 0;
      state.total = 0;
      state.bill = undefined;
      state.custom = undefined;
      state.number = undefined;
      state.percentage = 0;
    },
    setPercent(state, value) {
      state.custom = 0;
      state.percentage = Number(value);
    },
    setCustom(state, value) {
      state.percentage = 0;
      state.custom = Number(value);
    },
    setBill(state, value) {
      state.bill = Number(value);
    },
    setNumber(state, value) {
      state.number = Number(value);
    }
  },
  actions: {
    calculate(state) {
      state.commit("setAmount");
    },
    reset(state) {
      state.commit("reset");
    },
    setPercent(state, value) {
      state.commit("setPercent", value);
    },
    setBill(state, value) {
      state.commit("setBill", value);
    },
    setCustom(state, value) {
      state.commit("setCustom", value);
    },
    setNumber(state, value) {
      state.commit("setNumber", value);
    }
  },
  modules: {},
  getters: {
    getTip: state => format(state.tip),
    getTotal: state => format(state.total),
    getBill: state => state.bill,
    getCustom: state => state.custom,
    getNumber: state => state.number,
    getPercent: state => state.percentage
  }
});
