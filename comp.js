Vue.component("catalog",{
	props: [],
	template: `<div id="catalog">
				 <div class="title">Аниме Фигурки</div>
				 <product v-for="item of $root.products" :currentProduct="item" :key="item.id" :id="item.id"></product>
			   </div>`
})

Vue.component("product",{
	props: ["currentProduct"],
	template: `<div class="product">
				  <img :src="currentProduct.img"></img>
				  <h3>{{ currentProduct.title }}</h3>
				  <p>{{ currentProduct.price }} руб.</p>
				  <button @click="$root.addToBusket(currentProduct)">Купить</button>
			   </div>`
})