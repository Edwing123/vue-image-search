<template>
	<div id="app" class="container-fluid"> 
		<page-header></page-header>
		<page-main></page-main>
		<page-footer></page-footer>
	</div>
</template>


<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
// import styles from './assets/css/main.css';


export default {
	name: 'app',
	components: {
		PageHeader,
		PageMain,
		PageFooter
	}
}
</script>

