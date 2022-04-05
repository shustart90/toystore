Vue.component("busket",{
	props: [],
	template: `<div id="busket" v-if="$root.show">
				 <slot></slot>
				 <div>	
				 	<div id="close"><img src="img/error.png" @click="$root.show = !$root.show"></div>
				 	<div class="itemInBusket"><span class="cartPrice">Название товара:</span><span>Колличество:</span><span class="totalPrice">Сумма:</span></div>
				 	<busketProduct v-for="item of $root.busket" :currentProduct="item" class="itemInBusket"></busketProduct>
				 	<div id="total"><span>Итоговая сумма: </span><span>{{ $root.totalprice() }} руб.</span></div>
				 	<div id="downCart">
					 	<button @click="$root.busket=[]" id="clear">Очистить корзину</button>
					 	<form action="#" target="_blank">
						   <button id="goToBut">Перейти к оформлению</button>
						</form>
					</div>
				 </div>
			   </div>`
})

Vue.component("busketProduct",{
	props: ["currentProduct"],
	template: `<div><span class="cartPrice">{{currentProduct.title}}</span><span id="butLittle" @click="$root.delProdByMin(currentProduct)">-</span><span>{{currentProduct.quantity}} шт.</span><span @click="$root.addProdByPros(currentProduct)" id="butLittle">+</span><span class="totalPrice">{{currentProduct.quantity * currentProduct.price}} руб.</span></div>`
})

