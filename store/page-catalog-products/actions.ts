import { ActionTree } from 'vuex';

import { IRootState } from '~/types/root-state.interface';

import { IPageCatalogProductsState } from './state';

import { IFormCatalog } from '~/types/form-catalog.interface';
import { ICatalogQuery } from '~/types/catalog-query.interface';
import httpPageErrorHandler from '~/utils/http-page-error-handler';
import { IProduct } from '~/types/product.interface';

export default {
    async get({ commit }, payload: IFormCatalog) {
        try {
            commit('GET');

            const params: ICatalogQuery = {
                ...payload
            }

            if (!params.category) {
                delete params.category;
            }

            const { data }: { data: IProduct[] } = await this
                .$axios
                .get('http://localhost:3003/products', { params });

            commit('GET_SUCCESS', data);
        } catch (err) {
            const handledError = httpPageErrorHandler(err);
            console.log(handledError);
            commit('GET_ERROR', handledError)
        }
    },
    clear({ commit }) {
        commit('clear');
    }
} as ActionTree<IPageCatalogProductsState, IRootState>;
