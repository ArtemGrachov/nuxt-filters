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
import { Component } from 'nuxt-property-decorator';
import FormFilter from '~/components/FormFilter.vue';
import FormSort from '~/components/FormSort.vue';
import CatalogList from '~/components/CatalogList.vue';

@Component({
    components: {
        FormFilter,
        FormSort,
        CatalogList
    }
})
export default class PageCatalog extends Vue {}
</script>
