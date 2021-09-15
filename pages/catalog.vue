<template>
    <main>
        <div class="container">
            <h1>Catalog</h1>
            <div class="row">
                <div class="col-sm">
                    <FormFilter @formSubmit="formSubmitHandler" />
                </div>
                <div class="col-lg">
                    <FormSort @formSubmit="formSubmitHandler" />
                    <hr>
                    <table>
                        <tbody>
                            <tr>
                                <td>Get products status:</td>
                                <td>{{ getCatalogStatus }}</td>
                            </tr>
                            <tr>
                                <td>Get products error: </td>
                                <td>{{ getCatalogError }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <CatalogList
                        :products="products"
                    />
                    <hr>
                    <Pagination
                        :page="formCatalog._page"
                        @pageChange="pageChangeHandler"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Store } from 'vuex';
import { Action, Component, Getter, ProvideReactive, Watch } from 'nuxt-property-decorator';

import FormFilter from '~/components/FormFilter.vue';
import FormSort from '~/components/FormSort.vue';
import CatalogList from '~/components/CatalogList.vue';
import Pagination from '~/components/Pagination.vue';

import { IProduct } from '~/types/product.interface';
import { EStatus } from '~/types/status.enum';
import { IFormCatalog } from '~/types/form-catalog.interface';
import { IDictionary } from '~/types/dictionary.interface';
import { IRootState } from '~/types/root-state.interface';

import storeFormMapper from '~/utils/store-form-mapper';
import { ESortOrder } from '~/types/sort-order.enum';
import { IUpdateFieldPayload } from '~/types/update-field-payload.interface';

@Component({
    components: {
        FormFilter,
        FormSort,
        CatalogList,
        Pagination
    }
})
export default class PageCatalog extends Vue {
    static routeQueryToFormValue(query: IDictionary<string>): IFormCatalog {
        const formValue: IFormCatalog = {};

        if (query._page) {
            formValue._page = +query._page;
        }

        if (query._limit) {
            formValue._limit = +query._limit;
        }

        if (query._order) {
            formValue._order = query._order as ESortOrder;
        }

        if (query._sort) {
            formValue._sort = query._sort;
        }

        if (query.price_gte) {
            formValue.price_gte = +query.price_gte;
        }

        if (query.price_lte) {
            formValue.price_lte = +query.price_lte;
        }

        if (query.category) {
            formValue.category = query.category;
        }

        return formValue;
    }

    @Getter('page-catalog-products/products')
    public readonly products!: IProduct[];

    @Getter('page-catalog-products/getStatus')
    public readonly getCatalogStatus!: EStatus;

    @Getter('page-catalog-products/getError')
    public readonly getCatalogError!: any;

    @Getter('page-catalog-form/formValue')
    public readonly formCatalogValue!: IFormCatalog;

    @Action('page-catalog-products/get')
    public getProducts!: (payload: IFormCatalog) => Promise<void>;

    @Action('page-catalog-form/setFormValue')
    public setFormValue!: (payload: IFormCatalog) => Promise<void>;

    @Action('page-catalog-form/setFormField')
    public updateFormfield!: (payload: IUpdateFieldPayload<any>) => Promise<void>;

    @ProvideReactive('DI_FORM_FILTER')
    private get formFilter(): IFormCatalog {
        return this.formCatalog;
    }

    @ProvideReactive('DI_FORM_SORT')
    private get formSort(): IFormCatalog {
        return this.formCatalog;
    }

    public get formCatalog(): IFormCatalog {
        return storeFormMapper({
            store: this.$store,
            getter: 'page-catalog-form/formValue',
            action: 'page-catalog-form/setFormField',
            fields: [
                '_page',
                '_limit',
                '_order',
                '_sort',
                'price_gte',
                'price_lte',
                'category'
            ]
        })
    }

    private formValueToQuery(formValue: IFormCatalog): IDictionary<string> {
        const query: IDictionary<string> = {};

        if (this.formCatalogValue._page) {
            query._page = this.formCatalogValue._page.toString();
        }

        if (this.formCatalogValue._limit) {
            query._limit = this.formCatalogValue._limit.toString();
        }

        if (this.formCatalogValue._order) {
            query._order = this.formCatalogValue._order;
        }

        if (this.formCatalogValue._sort) {
            query._sort = this.formCatalogValue._sort;
        }

        if (this.formCatalogValue.price_gte) {
            query.price_gte = this.formCatalogValue.price_gte.toString();
        }

        if (this.formCatalogValue.price_lte) {
            query.price_lte = this.formCatalogValue.price_lte.toString();
        }

        if (this.formCatalogValue.category) {
            query.category = this.formCatalogValue.category;
        }

        return query;
    }

    public formSubmitHandler(): void {
        const query: IDictionary<string> = this.formValueToQuery(this.formCatalogValue);
        this.$router.push({ query });
    }

    public pageChangeHandler(page: number): void {
        this.updateFormfield({ field: '_page', value: page });
        this.formSubmitHandler();
    }

    public async asyncData(context: any): Promise<void> {
        const query: IDictionary<string> = context.query;
        const error: (err: any) => void = context.error;
        const store: Store<IRootState> = context.store;

        try {
            const payload: IFormCatalog = PageCatalog.routeQueryToFormValue(query as IDictionary<string>);

            await store.dispatch('page-catalog-form/setFormValue', payload);
            await store.dispatch('page-catalog-products/get', payload);
        } catch (err) {
            error(err);
        }
    }

    @Watch('$route.query')
    public onRouteQueryChanged(newValue: IDictionary<string>): void {
        const payload: IFormCatalog = PageCatalog.routeQueryToFormValue(newValue);
        this.setFormValue(payload);
        this.getProducts(payload);
    }
}
</script>

<style scoped>
.container {
    margin: 0 auto;
    max-width: 1200px;
}

.row {
    display: flex;
    align-items: stretch;
}

.col-sm {
    flex: 0 0 300px;
}

.col-lg {
    flex: 1 1 auto;
}
</style>
