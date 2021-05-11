import Product from "./Product";

function ListProduct({ products, removeProduct, editProduct }) {
  return (
    <div className="listProduct">
      <div className="product header">
        <div className="id">Ref</div>
        <div className="name">Nom Produit</div>
        <div className="city">Ville</div>
        <div className="price">Prix</div>
        <div className="buttons"></div>
      </div>
      {products ? (
        products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              removeProduct={removeProduct}
              editProduct={editProduct}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
export default ListProduct;
