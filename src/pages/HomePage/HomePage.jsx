import { products } from '../../data';
import modularClassNamer from '../../utility/functions/modularClassNamer';
import styles from './HomePage.module.css';
import ProductItem from '../../components/ProductItem/ProductItem';
const $ = modularClassNamer(styles);

const HomePage = () => {
  return (
    <section className={$`home-page container`}>
      <ul className={$`Products`}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
