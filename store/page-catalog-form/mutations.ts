import { MutationTree } from 'vuex';

import initialState, { IPageCatalogFormState } from './state';

import { IUpdateFieldPayload } from '~/types/update-field-payload.interface';
import { IFormCatalog } from '~/types/form-catalog.interface';

export default {
    SET_FORM_FIELD: (state, { field, value }: IUpdateFieldPayload<any>) => {
        // @ts-ignore
        state.form[field] = value;
    },
    SET_FORM_VALUE: (state, payload: Partial<IFormCatalog>) => {
        state.form = Object.assign({}, state.form, payload);
    },
    CLEAR: (state) => {
        state.form = initialState().form;
    }
} as MutationTree<IPageCatalogFormState>;
