import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/main.scss";
import Input from "./components/Input";
import Tags from "./components/Tags";
import ListProduct from "./components/ListProduct";

function App() {
  const [tags, setTags] = useState(false);
  const [products, setProduct] = useState(false);
  useEffect(() => {
    if (!products) {
      axios.get("/product/").then(({ data }) => {
        return setProduct(data);
      });
    }
  }, [products]);
  function FindTags() {
    axios.get(`/product/${tags.join(",")}`).then(({ data }) => {
      return setProduct(data);
    });
  }
  return (
    <div className="App">
      <Input setTags={setTags} />
      <Tags setTags={setTags} tags={tags} />
      <div className="search">
        <button onClick={FindTags}>Search</button>
      </div>
      <ListProduct products={products} />
    </div>
  );
}

export default App;
