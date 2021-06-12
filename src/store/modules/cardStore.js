import axios from "axios";
import env from '../../../env'

function get_module(){
  return axios.get(env.VUE_APP_API_URL+"prod");
}
const state = {
  cardData: null,
};
const actions = {
  async getModule({ commit }) {
    const response = await get_module();
    commit("addModule", response.data);
  },
};
const getters = {
  cardModule: (state) => state.cardData,
};
const mutations = {
  addModule: (state, response) => (state.cardData = response),
};
export default {
  state,
  actions,
  mutations,
  getters,
};
