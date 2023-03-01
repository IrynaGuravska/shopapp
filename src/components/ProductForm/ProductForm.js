import styles from './ProductForm.module.scss';
import Button from "../Button/Button";
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = props => {
   return (
      <form onSubmit={props.shirtInBasket}>
         
      <OptionSize 
         sizes={props.sizes}
         size={props.size}
         currentSize={props.currentSize}
         setCurrentSize={props.setCurrentSize}
         price={props.price}
         additionalPrice={props.additionalPrice}
         setCurrentSizePrice={props.setCurrentSizePrice}
      />
      
      <OptionColor 
         colors={props.colors}
         currentColor={props.currentColor}
         setCurrentColor={props.setCurrentColor}
      />

      <Button className={styles.button}>
         <span className="fa fa-shopping-cart" />
      </Button>
      </form>
   );
};

export default ProductForm