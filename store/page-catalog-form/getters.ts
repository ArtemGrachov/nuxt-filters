import { GetterTree } from 'vuex';
import { IRootState } from '~/types/root-state.interface';

import { IPageCatalogFormState } from './state';

export default {
    'formValue': state => {
        return state.form;
    }
} as GetterTree<IPageCatalogFormState, IRootState>;
