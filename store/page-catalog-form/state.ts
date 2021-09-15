import { IFormCatalog } from '~/types/form-catalog.interface';

export interface IPageCatalogFormState {
    form: IFormCatalog;
}

export default (): IPageCatalogFormState => {
    return {
        form: {
            _page: null,
            _limit: null,
            _order: null,
            _sort: null,
            price_gte: null,
            price_lte: null,
            category: []
        }
    };
}
