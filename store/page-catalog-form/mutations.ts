import { MutationTree } from 'vuex';

import initialState, { IPageCatalogFormState } from './state';

import { IUpdateFieldPayload } from '~/types/update-field-payload.interface';

export default {
    SET_FORM_FIELD: (state, { field, value }: IUpdateFieldPayload<any>) => {
        // @ts-ignore
        state.form[field] = value;
    },
    CLEAR: (state) => {
        state.form = initialState().form;
    }
} as MutationTree<IPageCatalogFormState>;
