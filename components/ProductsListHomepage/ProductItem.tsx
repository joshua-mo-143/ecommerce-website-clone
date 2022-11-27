import React from 'react'
import Image from 'next/image'
import styles from './ProductsListHomepage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

type Props = {
    imgsrc: string;
    name: string;
    price: string;
    desc: string;
    id: string;
}

const ProductItem = ({ id, imgsrc, name, price }: Props) => {
    return (
        <div className={styles.productContainer}>
            <Link href={`/products/${id}`}><Image src={`/${imgsrc}`} width={250} height={150} alt={`Product image for ${name}`} /></Link>
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