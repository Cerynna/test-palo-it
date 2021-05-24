// Import Lib
import { useState, useEffect } from "react";
import axios from "axios";
// Import Styles
import "./styles/main.scss";

// Import Components
import Input from "./components/Input";
import Tags from "./components/Tags";
import ListProduct from "./components/ListProduct";
import AddProduct from "./components/AddProduct";

// Import des Villes definie.
import defCity from "./defCity.json";

function App() {
  // State des Tags
  const [tags, setTags] = useState(false);
  // State liste des produits
  const [products, setProduct] = useState(false);

  // Hook sur le life cycle des states
  useEffect(() => {
    // Si la liste des produit est vide
    if (!products) {
      FindTags();
    }
  }, [products, tags]);
  // Update la liste des produits.
  function FindTags() {
    // Si la liste des tags n'ai pas égale a false
    if (tags) {
      // Request au back pour avoir la liste des produit en filtrant par tag.
      axios.get(`/product/${tags.join(",")}`).then(({ data }) => {
        // Update le state des produits
        return setProduct(data);
      });
    } else {
      // Request au back pour avoir la liste des produit
      axios.get("/product/").then(({ data }) => {
        // Update le state des produits
        return setProduct(data);
      });
    }
  }
  // Request au back pour delete un produit
  function removeProduct(product) {
    axios.delete("/product/", { data: { id: product.id } }).then(({ data }) => {
      if (data) {
        // Update le state des produits
        setProduct(products.filter((x) => x.id !== product.id));
      }
    });
  }
  // Request au back pour update un produit
  function editProduct(product, name, city, price, callback) {
    // Verifications si le produit existe
    if (!product) return { error: "Produit inexistant", target: "all" };
    // Verifications si le nom du produit fait + de 3 caractère
    if (name.length < 3)
      return {
        error: "Le nom du produit doit faire plus de 3 caractères",
        target: "name",
      };
    // Verifications si la ville du produitfait parti de la liste de ville disponnible
    if (!defCity.includes(city))
      return { error: "Cette ville est indisponnible", target: "city" };
    // Verifications Si le prix est bien un nombre
    if (isNaN(price)) return { error: "La valeur est fausse", target: "price" };
    // Request au back pour update
    axios
      .patch("/product/", {
        id: product.id,
        name: name,
        city: city,
        price: price,
      })
      .then(({ data }) => {
        if (data) {
          product.name = name;
          product.city = city;
          product.price = price;
          callback();
        }
      });
    return true;
  }
  // Request au back pour crée un produit
  function CreateProduct(id, name, city, price, callback) {
    let product = {
      id: id.current.value,
      name: name.current.value,
      city: city.current.value,
      price: price.current.value,
    };
    axios.post("/product/", product).then(({ data }) => {
      if (data) {
        setProduct(false);
        callback();
      }
    });
  }

  return (
    <div className="App">
      <Input setTags={setTags} defCity={defCity} />
      <Tags setTags={setTags} tags={tags} />
      <div className="search">
        <button onClick={FindTags}>Search</button>
      </div>
      <ListProduct
        products={products}
        removeProduct={removeProduct}
        editProduct={editProduct}
      />
      <AddProduct CreateProduct={CreateProduct} />
    </div>
  );
}

export default App;
