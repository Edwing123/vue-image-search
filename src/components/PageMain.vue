<template>
    <main class="main row">
        <div class="col-12">
            <!-- <output-images /> -->
            <div class="intro-section">
                <h2 class="intro__title">Find images that inspire You</h2>
                <p class="intro__content">FindImage powered by <a href="https://pixabay.com/" class="word__decorator">Pixelbay API</a></p>
            </div>
            <output-images></output-images>
        </div>
    </main>
</template>


<script>
import OutputImages from './OutputImages.vue';


export default {
    name: 'page-main',
    components: {
        OutputImages
    }
}
</script>

