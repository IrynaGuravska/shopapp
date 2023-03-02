import styles from './OptionSize.module.scss';

const OptionSize = props => {

	const setSize = (size) => {
		props.setCurrentSize(size.name);
		props.setCurrentSizePrice(size.additionalPrice);
	}

	const sizeClassNames = (size) => {
		const sizeClasses = size.name === props.currentSize && styles.active;

		if(!sizeClasses) {
			return '';
		}
		return sizeClasses
	};

	return (
		<div className={styles.sizes}>
			<h3 className={styles.optionLabel}>Sizes</h3>
			<ul className={styles.choices}>
				{props.sizes.map((size, i) => (
					<li key={'size' + i}>
						<button 
							type="button" 
							onClick={() => setSize(size)} 
							className={sizeClassNames(size)}>
							{size.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
};

export default OptionSize