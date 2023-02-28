import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState('S');
  const [currentSizePrice, setCurrentSizePrice] = useState(props.sizes[0].additionalPrice);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={`${props.name} shirt`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={shirtInBasket}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => (
                <li key={size}>
                  <button type="button" onClick={() => {setCurrentSize(size.name); setCurrentSizePrice(size.additionalPrice)}} className={size.name === currentSize && styles.active}>
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(item => (
                <li key={item}>
                  <button type="button" onClick={() => setCurrentColor(item)} className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};
export default Product;