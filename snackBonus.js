const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
	restaurant: {
		name: "Hyur's Burgers",
		welcomeClient: () => {
			console.log("Benvenuto!");
		},
		address: {
			street: 'Main Street',
			number: 123,
			showAddress: () => {
				console.log("Main Street 123");
			}
		},
		isOpen: true,
	}
}


function deepCopy(obj) {
    const copia = {}

    for (const key in obj) {

        if (typeof obj[key] === 'function') {
            // caso 1 — cosa fai?
            copia[key] = obj[key]
            
        } else if (typeof obj[key] === 'object') {
            // caso 2 — cosa fai? (hint: ricorsione)
            copia[key] = deepCopy(obj[key])

        } else {
            // caso 3 — cosa fai?
            copia[key] = obj[key]

        }
    }

    return copia
}