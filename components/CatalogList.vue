<template>
    <ul>
        <li
            v-for="product in products"
            :key="product.id"
        >
            <CatalogItem :product="product" />
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';

import CatalogItem from '~/components/CatalogItem.vue';

import { IProduct } from '~/types/product.interface';

@Component({
    components: {
        CatalogItem
    }
})
export default class ComoonentCatalogList extends Vue {
    @Prop({ default: () => [] })
    public readonly products!: IProduct[];
}
</script>

