function ProductCard({ id, title, thumbnail, description, price }) {
  return (
    <>
      <div>
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <button>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductCard;
