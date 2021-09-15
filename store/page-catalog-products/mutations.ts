import { MutationTree } from 'vuex';

import { IPageCatalogProductsState } from './state';

import { EStatus } from '~/types/status.enum';
import { IProduct } from '~/types/product.interface';

export default {
    GET: (state) => {
        state.getStatus = EStatus.INIT;
        state.getError = null
    },
    GET_SUCCESS: (state, payload: IProduct[]) => {
        state.getStatus = EStatus.SUCCESS;
        state.getError = payload;
        state.products = payload;
    },
    GET_ERROR: (state, payload: any) => {
        state.getStatus = EStatus.ERROR;
        state.getError = payload;
    },
} as MutationTree<IPageCatalogProductsState>;
