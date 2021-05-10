const Product = require("../model/Product");
const { makeID, randomInt, defCity } = require("../tools");

async function init() {
  console.log("SEEDER PRODUCT");
  await Product.clear();

  let fakeProduct = [];
  for (let index = 1; index <= 100; index++) {
    const product = {
      id: makeID(),
      name: `Produit ${index}`,
      city: defCity[randomInt(0, defCity.length - 1)],
      price: randomInt(5, 20),
    };
    fakeProduct.push(product);
  }
  await Promise.all(
    fakeProduct.map((product) => {
      return Product.set(product.id, product);
    })
  ).then((data) => {
    data.map((valid, index) => {
      if (!valid) {
        console.error(fakeProduct[index]);
      }
    });
  });
}

init();
