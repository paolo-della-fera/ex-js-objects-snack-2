const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// in totale sono stati creati 9 oggetti in memoria, perchè ogni oggetto annidato è stato clonato 3 volte (hamburger, maker, restaurant)

console.log(hamburger)
console.log(secondBurger)
console.log(thirdBurger)