<template>
    <form @submit.prevent="submitHandler">
        <h2>Price</h2>
        <div>
            <label for="minPrice">
                Min price:
            </label>
            <input type="number" name="minPrice" id="minPrice" v-model="form.price_gte" />
        </div>
        <div>
            <label for="minPrice">
                Max price:
            </label>
            <input type="number" name="minPrice" id="minPrice" v-model="form.price_lte" />
        </div>
        <div>
            <h3>
                Category
            </h3>
            <div>
                <input
                    type="radio"
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
                    type="radio"
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
                    type="radio"
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
                    type="radio"
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
                    type="radio"
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
                    type="radio"
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
                    type="radio"
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
                    type="radio"
                    id="other"
                    value="other"
                    v-model="form.category"
                />
                <label for="other">
                    Other
                </label>
            </div>
            <div>
                <input
                    type="radio"
                    id="none"
                    value=""
                    v-model="form.category"
                />
                <label for="none">
                    All
                </label>
            </div>
        </div>
        <button type="submit">
            Submit
        </button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, InjectReactive } from 'nuxt-property-decorator';

import { IFormCatalog } from '~/types/form-catalog.interface';

@Component({})
export default class ComoonentFormFilter extends Vue {
    @InjectReactive('DI_FORM_FILTER')
    public form!: IFormCatalog;

    public submitHandler(): void {
        this.$emit('formSubmit');
    }
}
</script>








