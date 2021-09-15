<template>
    <article>
        <hr>
        <small>
            {{ product.category }}
        </small>
        <h4>
            {{ product.name }}
        </h4>
        <div>
            Price: <strong>{{ product.price }}</strong>
        </div>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';

import { IProduct } from '~/types/product.interface';

@Component({})
export default class ComoonentCatalogList extends Vue {
    @Prop({ required: true })
    public readonly product!: IProduct;
}
</script>

