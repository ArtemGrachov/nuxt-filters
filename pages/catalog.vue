<template>
  <main>
      <h1>Catalog</h1>
      <FormFilter @formSubmit="formSubmitHandler" />
      <hr>
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
      <hr>
      <CatalogList :products="products" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Action, Component, Getter, ProvideReactive } from 'nuxt-property-decorator';

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
    public readonly getCatalogStatus!: EStatus;

    @Getter('page-catalog-products/getError')
    public readonly getCatalogError!: any;

    @Getter('page-catalog-form/formValue')
    public readonly formCatalogValue!: IFormCatalog;

    @Action('page-catalog-products/get')
    public getProducts!: (payload: IFormCatalog) => Promise<void>;

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

    public async formSubmitHandler(): Promise<void> {
        await this.getProducts(this.formCatalogValue);
    }
}
</script>
