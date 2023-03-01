import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState('S');
  const [currentSizePrice, setCurrentSizePrice] = useState(props.sizes[0].additionalPrice);

  const getPrice = () => {
    return props.basePrice + currentSizePrice;
  }

  const shirtInBasket = (event) => {
    event.preventDefault();
    return (
      console.log('Summary'),
      console.log('========='),
      console.log('Name: ', props.title),
      console.log('Price: ', getPrice()),
      console.log('Size: ', currentSize),
      console.log('Color: ', currentColor)
    )
  }

  return (
    <article className={styles.product}>

      <ProductImage name={props.name} 
      color={currentColor} 
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
    
        <ProductForm 
          onClick={props.onClick}
          sizes={props.sizes}
          size={props.size}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          price={props.price}
          additionalPrice={props.additionalPrice}
          setCurrentSizePrice={setCurrentSizePrice}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          shirtInBasket={shirtInBasket}
        />
      </div>
    </article>
  );
};

export default Product;