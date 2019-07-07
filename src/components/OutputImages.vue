<template>
    <div class="images-result">
        <h3 class="results__title">Results for {{ keyword }}</h3>
        <div class="images">
            <template v-if="images">
                <output-image
                    v-for="image in images.hits"
                    :key="image.id"
                    :imageInfo="image"
                ></output-image>
            </template>
        </div>
    </div>
</template>


<script>
import { mapState } from 'vuex';
import OutputImage from './OutputImage.vue';


export default {
    name: 'output-images',
    components: {
        OutputImage
    },
    computed: {
        ...mapState({
            keyword: state => state.imageSearching.searchedKeyword,
            searchResult: state => state.searchResult,
        }),
        images: function() {
            return this.searchResult.response;
        }
    },
}
</script>
