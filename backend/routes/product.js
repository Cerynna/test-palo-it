const router = require("express").Router();
const Product = require("../model/Product");

router.get("/", async (req, res, next) => {
  res.json(await Product.all());
});
router.get("/:city", async (req, res, next) => {
  let city = req.params.city.split(",");
  res.json(await Product.find("city", city));
});
router.post("/", async (req, res, next) => {
  const { id, name, city, price } = req.body;
  res.json(await Product.set(id, { id, name, city, price }));
});
router.patch("/", async (req, res, next) => {
  const { id, name, city, price } = req.body;
  res.json(await Product.update(id, { id, name, city, price }));
});
router.delete("/", async (req, res, next) => {
  const { id } = req.body;
  res.json(await Product.delete(id));
});
module.exports = router;
