// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "milk",
		lactose_intolerant: false,
		nut_allergy: true,
		price: 1.99
	},
	{
		name: "soy milk",
		lactose_intolerant: true,
		nut_allergy: true,
		price: 2.35
	},
	{
		name: "almond milk",
		lactose_intolerant: true,
		nut_allergy: false,
		price: 3.00
	},
	{
		name: "beef",
		lactose_intolerant: true,
		nut_allergy: true,
		price: 15.00
	},
	{
		name: "chicken",
		lactose_intolerant: true,
		nut_allergy: true,
		price: 12.00
	},
	{
		name: "cheddar",
		lactose_intolerant: false,
		nut_allergy: true,
		price: 1.50
	},
	{
		name: "pecan pie",
		lactose_intolerant: true,
		nut_allergy: false,
		price: 6.00
	},
	{
		name: "lasagna",
		lactose_intolerant: false,
		nut_allergy: true,
		price: 10.25
	},
	{
		name: "quinoa",
		lactose_intolerant: true,
		nut_allergy: true,
		price: 5.00
	},
	{
		name: "brown rice",
		lactose_intolerant: true,
		nut_allergy: true,
		price: 2.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose-Intolerant") && (prods[i].lactose_intolerant == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Nut Allergy") && (prods[i].nut_allergy == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	var roundedPrice = totalPrice.toFixed(2);
	return roundedPrice;
}