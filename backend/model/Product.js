const Keyv = require("keyv");
const keyv = new Keyv("sqlite://database/product.sqlite", {
  serialize: JSON.stringify,
  deserialize: JSON.parse,
});

const Product = {
  async get(id) {
    return await keyv.get(id);
  },
  async set(id, data) {
    return await keyv.set(id, data);
  },
  async update(id, data) {
    let verif = await keyv.get(id);
    if (verif) return await keyv.set(id, data);
    return false;
  },
  async delete(id) {
    return await keyv.delete(id);
  },
  async clear() {
    return await keyv.clear();
  },
  async all() {
    let request = `SELECT * FROM keyv;`;
    let datas = await keyv.opts.store.query(request);
    datas = datas.map((data) => {
      return JSON.parse(data.value).value;
    });
    return datas;
  },
  async find(field = "id", value) {
    let finder = await Product.all();
    if (typeof value === "string") {
      finder = finder.find((product) => {
        return product[field] == value;
      });
    }
    if (typeof value === "object") {
      finder = finder.filter((product) => {
        return value.includes(product.city);
      });
    }
    return finder;
  },
};

module.exports = Product;
