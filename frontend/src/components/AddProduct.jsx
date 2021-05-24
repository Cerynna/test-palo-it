import { useState, useRef } from "react";

function AddProduct({ CreateProduct }) {
  // State de la modal pour add un produit.
  const [open, setOpen] = useState(false);
  const id = useRef(false);
  const name = useRef(false);
  const city = useRef(false);
  const price = useRef(false);

  // Vider les inputs
  function Cancel() {
    id.current.value = "";
    name.current.value = "";
    city.current.value = "";
    price.current.value = "";
    setOpen(false);
  }
  // Envoyer le formulaire
  function Valid() {
    CreateProduct(id, name, city, price, Cancel);
  }

  return (
    <div className="addProduct">
      <div
        className={open ? "popover open" : "popover close"}
        onClick={(event) => {
          if (event.target.classList.contains("popover")) {
            setOpen(!open);
          }
        }}
      >
        <div className="form">
          <div className="title">Créer un Produit</div>
          <label htmlFor="id">Ref</label>
          <input type="text" ref={id} name="id" />
          <label htmlFor="name">Nom Produit</label>
          <input type="text" ref={name} name="name" />
          <label htmlFor="city">Ville</label>
          <input type="text" ref={city} name="city" />
          <label htmlFor="price">Prix</label>
          <input type="number" ref={price} name="price" />
          <div className="buttons">
            <button onClick={Valid}>Valider</button>
            <button onClick={Cancel}>Annuler</button>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddProduct;
