import styles from './OptionSize.module.scss';

const OptionSize = props =>{
   return (
   <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
               {props.sizes.map(size => (
                  <li key={size}>
                     <button type="button" onClick={() => {props.setCurrentSize(size.name); props.setCurrentSizePrice(size.additionalPrice)}} className={size.name === props.currentSize && styles.active}>
                        {size.name}
                     </button>
                  </li>
               ))}
            </ul>
         </div>
   );
}

export default OptionSize