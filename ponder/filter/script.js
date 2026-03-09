nums = [12,10,8,3];
console.log(nums.sort(compareFn)); // doesn't really work

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
                


function compareFn(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}
                
let simpleSort = simpleList.sort();
console.log(simpleSort);

let lowerList = simpleList.map(function(fruit) {
    return fruit.toLowerCase();
});

let lowerSort = lowerList.sort();

console.log(lowerSort);

let searchTerm = 'co';
let filterFruit = lowerSort.filter(searchFruit);

function searchFruit(item) {
    return item.includes(searchTerm);
}

console.log(filterFruit);

const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

function comparePriceFn(a,b) {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  }
 return 0;
}

function compareNameFn(a,b) {
  if (a.productName < b.productName) {
    return -1;
  } else if (a.productName > b.productName) {
    return 1;
  }
 return 0;
}

let productNameSort = products.sort(compareNameFn);
console.log(productNameSort);

let productPriceSort = products.sort(comparePriceFn);
console.log(productPriceSort);

//Doesn't actually work because of the order in which code is read and executed. :{

const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];
              
let query = "dog";

let filteredList = animals.filter(searchList);

function searchList(item) {
    return item.name.toLowerCase().includes(query.toLowerCase());
}

console.log(filteredList);

let queryTrait = "strong";

let filteredTraits = animals.filter(searchTraits);

function searchTraits(item) {
    return item.traits.find((trait) => trait.toLowerCase().includes(queryTrait.toLowerCase()));
}

console.log(filteredTraits);



























