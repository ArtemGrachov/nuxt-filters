<template>
    <main>
        <NuxtLink :to="'/catalog'">
            Open catalog
        </NuxtLink>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'nuxt-property-decorator';

@Component({})
export default class PageIndex extends Vue {}
</script>
