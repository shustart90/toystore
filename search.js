Vue.component("search-field",{
	props:[],
	template: `<div id="search-block">
					<input v-model="message" type="text" id="search" v-on:keyup.enter="$root.searching(message)">
					<button @click="$root.searching(message)">поиск</button>
				</div>`
})








