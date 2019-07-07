<template>
    <div class="image">
        <div class="image-header">
            <img :src="imageInfo.largeImageURL" alt="" class="image__thumb" />
        </div>
        <div class="image-body">
            <h4 class="image__author"></h4>
        </div>
    </div>
</template>


<script>
export default {
    name: 'output-image',
    props: {
        imageInfo: {
            type: Object,
            required: true,
        }
    }
}
</script>

