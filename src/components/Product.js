import React from 'react';

const Product = ({product}) => {
  let {image,title,price} = product;
  return (
      <li>
        <img src={image} alt='Belts'/>
        <h3>{title}</h3>
        <h4>{price}</h4>
      </li>
    )
}
export default Product;
