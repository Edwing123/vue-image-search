<template>
    <header class="header row">
        <div class="col-12">
            <h1 class="page-title">
                <a href="/">FindImage <img alt="findimage" src="../assets/images/page-logo.svg" ></a>
            </h1>
        </div>
        <div class="col-12">
            <div class="search-box">
                <input type="text" class="search__input form-control" v-model="keyword" />
                <button class="search__button btn btn-primary btn-block" :disabled="isButtonDisabled" @click="searchImage">Search</button>
            </div>
        </div>
    </header>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import { log } from 'util';


export default {
    name: 'page-header',
    data: function() {
        return {
            keyword: 'Programming',
        };
    },
    
    computed: {
        isButtonDisabled() {
            return !this.keyword || this.keyword.trim().length < 1;
        }
    },

    watch: {
        keyword: function() {
            let vm = this;
            vm.saveKeyword(vm.keyword);
        }
    },

    methods: {
        // ...mapActions(['setKeyword']),
        saveKeyword: function(keyword) {
            this.$store.commit('setKeyword', keyword);
        },
        searchImage() {
            let vm = this;
            vm.createQuery();
            vm.makeQuery()
                .then(() => {
                    console.log('Success search');
                })
                .catch(err => console.error);
        },
        ...mapActions(['createQuery', 'makeQuery'])   
    },

    created() {
        let vm = this;
        vm.saveKeyword(vm.keyword);
        vm.searchImage();

    },
};
</script>
