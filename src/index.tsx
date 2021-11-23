import React, { useState } from 'react';
import { render } from 'react-dom';
import Basket from './components/basket/basket';
import ProductsMap from './components/products/products-map';
import { ApplicationContext } from './context';
import './style.css';
import { Products } from './types';

function App() {
  const [data, setData] = useState<Products[]>([
    {
      id: '0',
      image:
        'https://www.apple.com/v/macbook-air/i/images/meta/macbook-air_overview__15sjf4iagj6q_og.png',
      title: 'Macbook pro',
      description:
        'Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.',
      price: 5000,
    },
    {
      id: '1',
      image:
        'https://4.imimg.com/data4/VA/GH/ANDROID-46853781/product-500x500.jpeg',
      title: 'Google Bag',
      description:
        "The Incognito Messenger is a great bag to take to and from work. With it's large main pocket and over-the-shoulder strap, this messenger is a must-have.",
      price: 500,
    },
  ]);
  const [basketItem, setBasketItem] = useState<Products[]>([]);
  const [showBasket, setShowBasket] = useState<boolean>(false);

  const addProductToBasket = (param: any) => {
    setBasketItem([...basketItem, param]);
  };

  const showBasketHandle = () => {
    setShowBasket(!showBasket);
  };

  return (
    <>
      <ApplicationContext.Provider
        value={{ basketItem, setBasketItem, data, setData }}
      >
        {showBasket && <Basket showBasketHandle={showBasketHandle} />}
        <h1 className="title">Products</h1>
        <button className="basket-btn" onClick={showBasketHandle}>
          Show Basket
        </button>

        {data.map((item: Products) => {
          return (
            <>
              <ProductsMap
                {...item}
                addProductToBasket={() => addProductToBasket(item)}
              />
            </>
          );
        })}
      </ApplicationContext.Provider>
    </>
  );
}

export default App;

render(<App />, document.getElementById('root'));
