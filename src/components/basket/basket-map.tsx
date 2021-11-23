import React, { useContext } from 'react';
import { ApplicationContext } from '../../context';
import { Products } from '../../types';

export default function BasketMap({
  id,
  image,
  title,
  price,
  description,
}: Products) {
  const { basketItem, setBasketItem } = useContext(ApplicationContext);

  const deleteHandle = (id) => {
    const updateList = basketItem.filter((item) => item.id !== id);

    setBasketItem(updateList);
  };
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
        <button
          style={{ backgroundColor: '#FF0000' }}
          onClick={() => deleteHandle(id)}
        >
          Delete item
        </button>
      </div>
    </>
  );
}
