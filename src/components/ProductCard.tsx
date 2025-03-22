import "./ProductCard.css";
import { Product } from "../types/types";

interface ProductCardProps {
  product: Product | undefined;
}

function ProductCard({ product }: ProductCardProps) {
  if (!product || 
      !product.brandName ||
      !product.productLink ||
      !product.productTitle ||
      !product.newPrice ||
      !product.imageUrl) {
    return null;
  }

  return (
    <div className="product-container">
      <div className="product-image">
        <a href={product.productLink}>
          <img src={product.imageUrl} alt={product.productTitle} />
        </a>
      </div>
      <div className="product-details">
        <span className="product-brand">{product.brandName}</span>
        <span className="product-title">{product.productTitle}</span>
        <span className="product-price-new">
          {product.newPrice} <span id="neuf-text">Neuf</span>
        </span>
        {product.usedPrice && (
          <span className="product-price-used">
            <span id="occasion-text">Occasion dès</span> {product.usedPrice}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;