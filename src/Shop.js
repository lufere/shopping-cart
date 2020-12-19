import React from 'react';
import Card from './Card';
import './shop.css'

const Shop = props =>{
  const products = props.products.map(album =>{
    return <Card
      title={album.title}
      img={album.img}
      price={album.price}
      id={album.id}
      key={album.id}
      addToCart={props.addToCart}
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