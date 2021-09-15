import { ActionTree } from 'vuex';

import { IRootState } from '~/types/root-state.interface';

import { IPageCatalogFormState } from './state';

import { IUpdateFieldPayload } from '~/types/update-field-payload.interface';

export default {
    setFormField({ commit }, payload: IUpdateFieldPayload<any>) {
        commit('SET_FORM_FIELD', payload);
    },
    clear({ commit }) {
        commit('clear');
    }
} as ActionTree<IPageCatalogFormState, IRootState>;
