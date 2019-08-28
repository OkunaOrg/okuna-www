import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meta: {
      i18n: {
        mutating: true,
        errored: false
      }
    },
    i18n: null
  },

  mutations: {
    fetchI18nSuccess(state) {
      state.meta.i18n.mutating = false;
    },
    fetchI18nFailure(state) {
      state.meta.i18n.mutating = false;
      state.meta.i18n.errored = true;

      state.i18n = null;
    },
    updateI18n(state, language) {
      state.i18n = language;
    }
  },

  getters: {
    isI18nLoaded(state) {
      return state.i18n && !state.meta.i18n.mutating;
    },

    isI18nErrored(state) {
      return state.meta.i18n.errored;
    }
  }
});
