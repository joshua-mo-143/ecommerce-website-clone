import React from 'react'
import Image from 'next/image'
import styles from './ProductsListHomepage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

type Props = {
    imgsrc: string;
    name: string;
    price: string;
    desc: string;
}

const ProductItem = ({ imgsrc, name, price }: Props) => {
    return (
        <div className={styles.productContainer}>
            <Image src={`/${imgsrc}`} width={250} height={150} alt={`Product image for ${name}`} />
            <div className={styles.productText}>
                <p>{name}</p>
                <div className={styles.productData}>
                <p>£{price}</p>
                <div className={styles.productOptions}>
                <button><FontAwesomeIcon icon={faHeart}/> </button>
                <button><FontAwesomeIcon icon={faCartPlus}/> </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem