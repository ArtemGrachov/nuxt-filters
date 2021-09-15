<template>
    <form @submit.prevent="submitHandler">
        <div>
            <label for="minPrice">
                Min price:
            </label>
            <input type="text" name="minPrice" id="minPrice" v-model="form.price_gte" />
        </div>
        <div>
            <label for="minPrice">
                Max price:
            </label>
            <input type="text" name="minPrice" id="minPrice" v-model="form.price_lte" />
        </div>
        <div>
            <div>
                <input
                    type="checkbox"
                    id="fruits"
                    name="fruits"
                    value="Fruits"
                    v-model="form.category"
                />
                <label for="fruits">
                    Fruits
                </label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="vegetables"
                    name="vegetables"
                    value="Vegetables"
                    v-model="form.category"
                />
                <label for="vegetables">
                    Vegetables
                </label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="drinks"
                    name="drinks"
                    value="Drinks"
                    v-model="form.category"
                />
                <label for="drinks">
                    Drinks
                </label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="dairy"
                    name="dairy"
                    value="Dairy products"
                    v-model="form.category"
                />
                <label for="dairy">
                    Dairy products
                </label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="juice"
                    name="juice"
                    value="Juice"
                    v-model="form.category"
                />
                <label for="juice">
                    Juice
                </label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="chocolate"
                    name="chocolate"
                    value="Chocolate"
                    v-model="form.category"
                />
                <label for="chocolate">
                    Chocolate
                </label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="bakery"
                    name="bakery"
                    value="Bakery"
                    v-model="form.category"
                />
                <label for="bakery">
                    Bakery
                </label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="other"
                    value="other"
                    v-model="form.category"
                />
                <label for="other">
                    Other
                </label>
            </div>
            </div>
    </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'nuxt-property-decorator';

import { IFormCatalog } from '~/types/form-catalog.interface';

@Component({})
export default class ComoonentFormFilter extends Vue {
    public form: IFormCatalog = {
        _page: null,
        _limit: null,
        _order: null,
        _sort: null,
        price_gte: null,
        price_lte: null,
        category: []
    };

    checkedNames = []
}
</script>








