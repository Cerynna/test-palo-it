import Product from "./Product";

function ListProduct({ products }) {
  return (
    <div className="listProduct">
      <div className="product header">
        <div className="id">Ref</div>
        <div className="name">Nom Produit</div>
        <div className="city">Ville</div>
        <div className="price">Prix</div>
      </div>
      {products ? (
        products.map((product) => {
          return <Product product={product} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}
export default ListProduct;
