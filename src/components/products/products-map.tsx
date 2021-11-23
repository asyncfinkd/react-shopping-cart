import React from 'react';
import { Products } from '../types';

export default function ProductsMap({
  image,
  title,
  price,
  description,
  addProductToBasket,
}: Products) {
  return (
    <>
      <div className="card">
        <img src={image} alt="" />
        <div className="card-flex">
          <h1>{title}</h1>
          <p>{price}$</p>
        </div>
        <small>{description.substring(0, 99)}...</small>
        <br />
        <button onClick={addProductToBasket}>Add to Cart</button>
      </div>
    </>
  );
}
