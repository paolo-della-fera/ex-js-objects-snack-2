const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const chefCopia = {...chef}
// il miglior metodo per clonare l'oggetto "chef" è utilizzare lo spread(...) perchè all'interno c'è una funzione



const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

const ristorantCopia = structuredClone(restaurant)
// il miglior modo per clonare l'oggetto restuarant è utilizzare structuredClone