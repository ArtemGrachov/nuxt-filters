import { IFormCatalog } from '~/types/form-catalog.interface';
import { IProduct } from '~/types/product.interface';
import { EStatus } from '~/types/status.enum';

export interface IPageCatalogProductsState {
    getStatus: EStatus;
    getError: any;
    products: IProduct[];
}

export default (): IPageCatalogProductsState => {
    return {
        getStatus: EStatus.INIT,
        getError: null,
        products: []
    };
}
