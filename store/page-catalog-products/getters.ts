import { GetterTree } from 'vuex';
import { IRootState } from '~/types/root-state.interface';

import { IPageCatalogProductsState } from './state';

export default {
    getStatus(state) {
        return state.getStatus;
    },
    getError(state) {
        return state.getError;
    },
    products(state) {
        return state.products;
    }
} as GetterTree<IPageCatalogProductsState, IRootState>;
