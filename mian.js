const appl = new Vue({
	el: '#app',
	data: {
		show: false,
		message:"",
		products: [
			{
				img: "https://toymenu.ru/upload/resize_cache/iblock/259/340_340_140cd750bba9870f18aada2478b24840a/25976f383b60992930a135b77f8441a8.jpg",
				title: "Фигурка Наруто",
				price: "4500",
				id: 1,
				quantity: 1
			},
			{
				img: "https://toymenu.ru/upload/resize_cache/iblock/6a7/340_340_140cd750bba9870f18aada2478b24840a/6a7c49459cc7102a1096df3f8948c039.jpg",
				title: "Фигурка Лаффи",
				price: "3600",
				id: 2,
				quantity: 1
			},
			{
				img: "https://toymenu.ru/upload/resize_cache/iblock/016/340_340_140cd750bba9870f18aada2478b24840a/01602b5ab14c74542810afdd6aac530e.jpg",
				title: "Фигурка Саске",
				price: "4200",
				id: 3,
				quantity: 1
			},
			{
				img: "https://toymenu.ru/upload/resize_cache/iblock/820/340_340_140cd750bba9870f18aada2478b24840a/8203d77985a74be900f6a418e7714c78.jpg",
				title: "Фигурка Какаши",
				price: "2900",
				id: 4,
				quantity: 1
			},
			{
				img: "https://sg-live.slatic.net/p/image-7217739-399ed4a7b0867b6230f9a400db9b1aa0-product.jpg",
				title: "Фигурка Микаса",
				price: "1900",
				id: 5,
				quantity: 1
			},
			{
				img: "https://toymenu.ru/upload/resize_cache/iblock/173/340_340_140cd750bba9870f18aada2478b24840a/1732d81c64162b68c121993343a36f88.jpg",
				title: "Фигурка Канеки Кен",
				price: "4100",
				id: 6,
				quantity: 1
			}
			],
		busket: [],
		checked: []
	},
	methods: {
		searching(value) {
			const regexp = new RegExp(value, 'i');
			this.checked = this.products.filter(product => regexp.test(product.title));
			console.log(this.checked);
			this.products.forEach(el => {
				const block = document.getElementById(el.id);
	            if(!this.checked.includes(el)){
	                block.classList.add('invisible');
	             } else {
	                 block.classList.remove('invisible');
	             }
            })
			this.message = "";
		},
		addToBusket(prod) {
			let find = this.busket.find(product => product.title === prod.title);
            if(find){
                find.quantity++;
            } else {
            	this.busket.push(prod);
            }
		},
		totalprice() {
			let total = 0;
			this.busket.forEach(item => {
				total += item.quantity * item.price;
			})
			return total;
		},
		addProdByPros(el) {
			el.quantity++;
		},
		delProdByMin(el) {
			if (el.quantity > 1) {
				el.quantity--;
			}
			else {
				let index = this.busket.indexOf(el);
				this.busket.splice(index, 1);
			}
		}
	},
	mounted: function() {
			console.log("Hallo");
		}
})

