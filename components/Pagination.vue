<template>
    <div>
        <div>
            Current page: {{ safePage }}
        </div>
        <div>
            <button type="button" @click="previousPageHandler">
                Previous page
            </button>
            <button type="button" @click="nextPageHandler">
                Next page
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';

@Component({})
export default class ComoonentPagination extends Vue {
    @Prop()
    public readonly page?: number;

    private get safePage(): number {
        if (this.page == null) {
            return 1;
        }

        return this.page;
    }

    public previousPageHandler(): void {
        this.$emit('pageChange', this.safePage - 1);
    }

    public nextPageHandler(): void {
        this.$emit('pageChange', this.safePage + 1);
    }
}
</script>
