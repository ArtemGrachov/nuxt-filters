import { ActionTree } from 'vuex';

import { IRootState } from '~/types/root-state.interface';
import { IUpdateFieldPayload } from '~/types/update-field-payload.interface';
import { IFormCatalog } from '~/types/form-catalog.interface';
import { IPageCatalogFormState } from './state';


export default {
    setFormField({ commit }, payload: IUpdateFieldPayload<any>): void {
        commit('SET_FORM_FIELD', payload);
    },
    setFormValue({ commit }, payload: IFormCatalog): void {
        commit('SET_FORM_VALUE', payload);
    },
    clear({ commit }): void {
        commit('clear');
    }
} as ActionTree<IPageCatalogFormState, IRootState>;
