import React from 'react';
import Card from './Card';
import Header from './Header';
import './shop.css'

const Shop = props =>{
  const products = props.products.map(album =>{
    return <Card
      title={album.title}
      img={album.img}
      price={album.price}
    />
  })
  return (
    <div>
      <div className='products'>
        {products}
        {/* {props.history.location.state?.test} */}
      </div>
    </div>
  );
}

export default Shop