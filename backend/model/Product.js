const Keyv = require("keyv");
const keyv = new Keyv("sqlite://database/product.sqlite", {
  serialize: JSON.stringify,
  deserialize: JSON.parse,
});
const defCity = require("../../frontend/src/defCity.json");

const Product = {
  // Recupere un produit par son ID.
  async get(id) {
    return await keyv.get(id);
  },
  // Crée et Update un produit par son ID.
  async set(id, data) {
    if (!data.id) return false;
    if (data.name < 3) return false;
    if (!defCity.includes(data.city)) return false;
    if (isNaN(data.price)) return false;

    return await keyv.set(id, data);
  },
  // Crée un produit spar son ID si il existe pas.
  async update(id, data) {
    let verif = await keyv.get(id);
    if (!verif) return false;
    if (!data.id) return false;
    if (data.name < 3) return false;
    if (!defCity.includes(data.city)) return false;
    if (isNaN(data.price)) return false;

    return await keyv.set(id, data);
  },
  // Supprime un produit par son ID
  async delete(id) {
    return await keyv.delete(id);
  },
  // Premet de clear la table Product
  async clear() {
    return await keyv.clear();
  },
  // Recupere le liste de tout les produits.
  async all() {
    let request = `SELECT * FROM keyv;`;
    let datas = await keyv.opts.store.query(request);
    datas = datas.map((data) => {
      return JSON.parse(data.value).value;
    });
    return datas.reverse();
  },
  // Renvois une liste filtré des produits.
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
