import { ESortOrder } from './sort-order.enum';

export interface ICatalogQuery {
    _page?: number;
    _limit?: number;
    _order?: ESortOrder;
    _sort?: string;
    price_gte?: number;
    price_lte?: number;
    category?: string;
}
