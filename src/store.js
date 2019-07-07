import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { imageApi } from '../config/config';
Vue.use(Vuex);



export default new Vuex.Store({
	state: {   
		imageApi,
		imageSearching: {
			keyword: '',
			searchedKeyword: '',
			imageType: '' || 'all',
			query: '',
			pageNumber: 1,
			imagesPerPage: 25,
		},
		searchResult: {
			loading: false,
			failed: false,
			response: null
		}
	},

	mutations: {
		setKeyword: (state, keyword) => state.imageSearching.keyword = keyword,
		setSearchedKeyword: (state, keyword) => state.imageSearching.searchedKeyword = keyword,
		setQuery: (state, query) => state.imageSearching.query = query,
		setImages: (state, imagesInfo) => state.searchResult.response = imagesInfo,
		setLoading: (state, status) => state.searchResult.loading = status,
		setFailed: (state, status) => state.searchResult.failed = status,
	},

	actions: {
		createQuery({ commit, state }) {
			const endpoint = state.imageApi.endpoint;
			const key = state.imageApi.key;
			// const keyword = state.imageSearch.keyword.replace(' ', '+');
			const keyword = encodeURIComponent(state.imageSearching.keyword);
			const imageType = state.imageSearching.imageType;
			const pageNumber = state.imageSearching.pageNumber;
			const imagesPerPage = state.imageSearching.imagesPerPage;
			const query = `${endpoint}?key=${key}&q=${keyword}&image_type=${imageType}&page=${pageNumber}&per_page=${imagesPerPage}`;
			commit('setQuery', query);
		},
		async makeQuery({ commit, state }) {
			const preparedQuery = state.imageSearching.query;
			commit('setLoading', true);
			const res = await fetch(preparedQuery);
			const data = await res.json();
			if (res.status === 200) {
				const imagesInfo = data;
				const searchedKeyword = state.imageSearching.keyword;
				commit('setSearchedKeyword', searchedKeyword);
				commit('setImages', imagesInfo);
				commit('setLoading', false);
			}
		} 
	}
});
