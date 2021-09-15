import { ActionTree } from 'vuex';

import { IRootState } from '~/types/root-state.interface';

import { IPageCatalogProductsState } from './state';

import { IUpdateFieldPayload } from '~/types/update-field-payload.interface';

export default {
    updateFormField({ commit }, payload: IUpdateFieldPayload<any>) {
        commit('SET_FORM_FIELD', payload);
    },
    clear({ commit }) {
        commit('clear');
    }
} as ActionTree<IPageCatalogProductsState, IRootState>;
