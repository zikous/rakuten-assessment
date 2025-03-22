import './App.css';
import ProductCard from './components/ProductCard';
import { Product } from './types/types';

const App = () => {
  const productDetails: Product = {
    brandName: "Apple",
    productLink: "/mfp/9623007/apple-iphone-15?pid=11517874360",
    productTitle: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
    newPrice: "754 €",
    usedPrice: "720,99 €",
    imageUrl: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg",
  };

  return (
    <div>
      <ProductCard product={productDetails} />  
    </div>
  );
};

export default App;
