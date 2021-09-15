<template>
    <form @submit.prevent="submitHandler">
        <div>
            <label for="sortBy">
                Sort by:
            </label>
            <select name="sortBy" id="sortBy" v-model="form._sort" >
                <option value="name">Name</option>
                <option value="price">Price</option>
            </select>
        </div>
        <div>
            <label for="order">
                Order:
            </label>
            <select name="order" id="order" v-model="form._order" >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
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
export default class ComoonentFormSort extends Vue {
    @InjectReactive('DI_FORM_SORT')
    public form!: IFormCatalog;

    public submitHandler(): void {
        this.$emit('formSubmit');
    }
}
</script>

