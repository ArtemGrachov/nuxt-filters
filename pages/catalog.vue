<template>
  <main>
      <h1>Catalog</h1>
      <FormFilter />
      <hr>
      <FormSort />
      <hr>
      <CatalogList />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Getter, ProvideReactive } from 'nuxt-property-decorator';

import FormFilter from '~/components/FormFilter.vue';
import FormSort from '~/components/FormSort.vue';
import CatalogList from '~/components/CatalogList.vue';

import { IProduct } from '~/types/product.interface';
import { EStatus } from '~/types/status.enum';
import { IFormCatalog } from '~/types/form-catalog.interface';

import storeFormMapper from '~/utils/store-form-mapper';

@Component({
    components: {
        FormFilter,
        FormSort,
        CatalogList
    }
})
export default class PageCatalog extends Vue {
    @Getter('page-catalog-products/products')
    public readonly products!: IProduct[];

    @Getter('page-catalog-products/getStatus')
    public readonly getProductsStatus!: EStatus;

    @Getter('page-catalog-products/getError')
    public readonly getError!: any;

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
}
</script>
