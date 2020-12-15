import React from 'react';
import Card from './Card';
import Header from './Header';
import './shop.css'

const Shop = props =>{
  return (
    <div>
      <div className='products'>
        <Card
            title='In Rainbows'
            img = 'https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png'
            price = '20'
        />
        <Card
            title='A Moon Shaped Pool'
            img = 'https://images-na.ssl-images-amazon.com/images/I/815bmGN5LML._AC_SL1200_.jpg'
            price = '20'
        />
        <Card
            title='Ok Computer'
            img = 'https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png'
            price = '20'
        />
        {props.qty}
        {/* {props.history.location.state?.test} */}
      </div>
    </div>
  );
}

export default Shop