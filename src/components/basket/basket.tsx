import React, { useContext, useEffect, useState } from 'react';
import { ApplicationContext } from '../../context';
import { Products } from '../../types';
import BasketMap from './basket-map';

export default function Basket({ showBasketHandle }: any) {
  const { basketItem, setBasketItem } = useContext(ApplicationContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let result = 0;
    basketItem.map((item: Products) => {
      result += item.price;
    });

    setPrice(result);
  }, [basketItem]);
  return (
    <>
      <div className="basket-blur-bg" onClick={showBasketHandle}></div>
      <div className="basket-container">
        <h2 className="basket-count-heading">
          you got {basketItem.length} item in basket
        </h2>
        <p style={{ marginTop: 10 }}>price: {price}$</p>
        {basketItem?.map((item: Products) => {
          return (
            <>
              <BasketMap {...item} />
            </>
          );
        })}
      </div>
    </>
  );
}
