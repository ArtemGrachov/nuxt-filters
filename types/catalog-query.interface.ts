import { ESortOrder } from './sort-order.enum';

export interface ICatalogQuery {
    _page?: number | null;
    _limit?: number | null;
    _order?: ESortOrder | null;
    _sort?: string | null;
    price_gte?: number | null;
    price_lte?: number | null;
    category?: string | null;
}
