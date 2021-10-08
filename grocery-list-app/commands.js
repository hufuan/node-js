const fs = require("fs");

const readFile = (fileName) => {
    try {
        return JSON.parse(fs.readFileSync(fileName));
    } catch (e) {
        return [];
    }
};

const add = (item, price) => {
    console.log('adding ' + item + ' ' + price);
    let groceryList = readFile("groceryList.json")
    let index = groceryList.findIndex((x) => x.item === item);
    //console.log(index);
    if (index === -1) {
        groceryList.push({item, price})
        item1 = item;
        obj = {item1, price}
        console.log(obj)
    } else {
        groceryList[index].price += price;
    }
    fs.writeFileSync("groceryList.json", JSON.stringify(groceryList));
}

const remove = (item) => {
    let groceryList = readFile("groceryList.json")
    const groceryList1 = groceryList.filter((x) => x.item !== item);
    fs.writeFileSync("groceryList.json", JSON.stringify(groceryList1));
}

const priceOf = (item) => { 
    let groceryList = readFile("groceryList.json")
    let index = groceryList.findIndex((x) => x.item === item);
    if (index !== -1) {
        console.log(groceryList[index]);
        console.log(` price of ${item} is ${groceryList[index].price} `);
    } else {
        console.log("It didn't find!");
    }
}

const print = () => {
    let groceryList = readFile("groceryList.json")
    console.log(groceryList);
}
module.exports = {
    add,
    remove,
    print,
    priceOf
}