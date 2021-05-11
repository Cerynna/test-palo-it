import { useState, useRef } from "react";

function Product({ product, removeProduct, editProduct }) {
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const name = useRef(false);
  const city = useRef(false);
  const price = useRef(false);
  const errorDiv = useRef(false);

  function Cancel() {
    if (errorDiv.current) errorDiv.current.classList.add("close");
    if (name.current) name.current.classList.remove("error");
    if (city.current) city.current.classList.remove("error");
    if (price.current) price.current.classList.remove("error");
    setEdit(false);
    setRemove(false);
  }

  function editToggle() {
    setEdit(!edit);
  }
  function removeToggle() {
    setRemove(!remove);
  }
  function validRemove() {
    removeProduct(product);
  }
  function validEdit() {
    let { error, target } = editProduct(
      product,
      name.current.value,
      city.current.value.toLowerCase(),
      price.current.value,
      Cancel
    );
    if (error) {
      errorDiv.current.innerText = error;
      errorDiv.current.classList.remove("close");

      switch (target) {
        default:
        case "all":
          name.current.classList.add("error");
          city.current.classList.add("error");
          price.current.classList.add("error");
          break;
        case "name":
          name.current.classList.add("error");
          break;
        case "city":
          city.current.classList.add("error");
          break;
        case "price":
          price.current.classList.add("error");
          break;
      }
      setTimeout(() => {
        if (errorDiv.current) errorDiv.current.classList.add("close");
        if (name.current) name.current.classList.remove("error");
        if (city.current) city.current.classList.remove("error");
        if (price.current) price.current.classList.remove("error");
      }, 5000);
    }
  }
  if (edit) {
    return (
      <div className="product">
        <div className="errorDiv close" ref={errorDiv}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="id">{product.id}</div>
        <div className="name">
          <input type="text" defaultValue={product.name} ref={name} />
        </div>
        <div className="city">
          <input type="text" defaultValue={product.city} ref={city} />
        </div>
        <div className="price">
          <input type="text" defaultValue={product.price} ref={price} />
        </div>
        <div className="buttons">
          <div className="icon valid" onClick={validEdit}>
            ✓
          </div>
          <div className="icon cancel" onClick={Cancel}>
            ✗
          </div>
        </div>
      </div>
    );
  }
  if (remove) {
    return (
      <div className="product">
        <div className="errorDiv close" ref={errorDiv}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="all">Supprimer {product.id} ? </div>
        <div className="buttons">
          <div className="icon valid" onClick={validRemove}>
            ✓
          </div>
          <div className="icon cancel" onClick={Cancel}>
            ✗
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="product">
      <div className="errorDiv close" ref={errorDiv}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
      <div className="id">{product.id}</div>
      <div className="name">{product.name}</div>
      <div className="city">{product.city}</div>
      <div className="price">{product.price}</div>
      <div className="buttons">
        <div className="icon edit" onClick={editToggle}>
          ✎
        </div>
        <div className="icon trash" onClick={removeToggle}>
          🗑
        </div>
      </div>
    </div>
  );
}
export default Product;
