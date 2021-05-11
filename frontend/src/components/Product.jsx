function Product({ product }) {
  console.log(product);
  return (
    <div className="product">
      <div className="id">{product.id}</div>
      <div className="name">{product.name}</div>
      <div className="city">{product.city}</div>
      <div className="price">{product.price}</div>
    </div>
  );
}
export default Product;
