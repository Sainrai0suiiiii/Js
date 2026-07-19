/*
5. Inventory Stock Checker
Given an array of products [{name, stock}],
use a for...of loop with continue to skip products with stock === 0, 
and print only available products with their stock count.
*/

const products = [
    {name:"Denim Jacket", stock:12},
    {name:"Graphic tea", stock:12},
    {name:"Cargo Pants", stock:3},
    {name:"Sneakers", stock:4},
    {name:"Beanie", stock:8}
];

function checkAvailableStock(products){
    for(const product of products){
        if (product.stock === 0){
            continue;
        }
        console.log(`${product.name}: ${product.stock} in stock`);
    }
}

checkAvailableStock(products);

const ktaHaru =[
    {name: "Sain Rai", age : 25},
    {name: "Rigesh Gadal", age : 23},
    {name: "hira khadka", age : 28},
    {name: "Bishnu Rishi", age : 35},
    {name: "Manuu Bhai", age : 45}
];

function samel(ktaHaru){
    for ( const hero of ktaHaru){
        if(hero.age===0){
            continue;
        }
        console.log(`${hero.name}: ${hero.age} years old`);
    }

}

console.log("\nSamel kta haru !!!");
samel(ktaHaru);


const vadaKuda =[
    {name:"karai",price:1500},
    {name:"kukar",price:1300},
    {name:"gas",price:3500},
    {name:"chamal",price:4500},
    {name:"jar",price:500},
    {name:"kuchho",price:200}
]

function kitchen(vadaKuda){
    for (const dera of vadaKuda){
        if(dera.price === 0){
            continue;

        }
        console.log(`${dera.name}:${dera.price}`);
    }
}
console.log(" \nVada KUda of my kitchen")
kitchen(vadaKuda);

const worldCup = [
    {county:"Argentina", Trophy:3},
    {county:"Brazil", Trophy:5},
    {county:"Spain", Trophy:1},
    {county:"Germany", Trophy:1},
    {county:"Argentina", Trophy:3},
];

function worldCupWinners(worldCup){
    for( const winners of worldCup){
        if(winners.Trophy === 0){
            continue;

        }
        console.log(`${winners.county}:${winners.Trophy} Trophies `);

    }
}
console.log("\nWinners of WorldCUp!!!");
worldCupWinners(worldCup);

const Songs =[
    {name:"maya garnu la", writer: "Jhon Rai",revenue : 300000},
    {name:"ManyMan", writer: "AMG",revenue : 350000},
    {name:"Hatkadi", writer: "Vten",revenue : 4300000},
    {name:"NANANA", writer: "Jhon Rai",revenue : 334954385},
    {name:"SADII", writer: "Sain Rai",revenue : 302320000}

];

function favCollection(Songs){
    for(const dami of Songs){
        if(dami.revenue === 0){
            continue;
        }
        console.log(`${dami.name}: song of ${dami.writer}  \n${dami.revenue} is the revenue`);

    }
}
console.log("\nFav song collection !!!");

favCollection(Songs);