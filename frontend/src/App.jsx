import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/main.scss";
import Input from "./components/Input";
import Tags from "./components/Tags";
import ListProduct from "./components/ListProduct";
import AddProduct from "./components/AddProduct";
import defCity from "./defCity.json";

function App() {
  const [tags, setTags] = useState(false);
  const [products, setProduct] = useState(false);
  useEffect(() => {
    if (!products) {
      if (tags) {
        axios.get(`/product/${tags.join(",")}`).then(({ data }) => {
          return setProduct(data);
        });
      } else {
        axios.get("/product/").then(({ data }) => {
          return setProduct(data);
        });
      }
    }
  }, [products, tags]);
  function FindTags() {
    if (tags) {
      axios.get(`/product/${tags.join(",")}`).then(({ data }) => {
        return setProduct(data);
      });
    } else {
      axios.get("/product/").then(({ data }) => {
        return setProduct(data);
      });
    }
  }
  function removeProduct(product) {
    axios.delete("/product/", { data: { id: product.id } }).then(({ data }) => {
      if (data) {
        setProduct(products.filter((x) => x.id !== product.id));
      }
    });
  }
  function editProduct(product, name, city, price, callback) {
    if (!product) return { error: "Produit inexistant", target: "all" };
    if (name.length < 3)
      return {
        error: "Le nom du produit doit faire plus de 3 caractères",
        target: "name",
      };
    if (!defCity.includes(city))
      return { error: "Cette ville est indisponnible", target: "city" };
    if (isNaN(price)) return { error: "La valeur est fausse", target: "price" };

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
