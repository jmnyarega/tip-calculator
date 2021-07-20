import Vue from "vue";
import Vuex from "vuex";

import { tipCalc as calculator, format } from "../lib/calculator";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tip: 0,
    total: 0,
    percentage: 0,
    bill: '',
    custom: '',
    number: ''
  },
  mutations: {
    setAmount(state) {
      const { bill, number, custom, percentage } = state;
      console.log(percentage);
      if (bill > 0 && number > 0 && (custom > 0 || percentage)) {
        state.total = calculator(state)?.amount;
        state.tip = calculator(state)?.tip;
      }
    },
    reset(state) {
      state.tip = 0;
      state.total = 0;
      state.bill = 0;
      state.custom = 0;
      state.number = 0;
      state.percentage = 0;
    },
    setPercent(state, value) {
      state.custom = '';
      state.percentage = Number(value);
    },
    setBill(state, value) {
      state.bill = Number(value);
    },
    setCustom(state, value) {
      state.percentage = 0;
      state.custom = Number(value);
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
    getBill: state => String(state.bill),
    getCustom: state => String(state.custom),
    getNumber: state => String(state.number),
    getPercent: state => state.percentage
  }
});
