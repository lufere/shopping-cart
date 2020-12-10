import React from 'react';
import Card from './Card';
import Header from './Header';

function App() {
  return (
    <div>
      <Header
        cart={[1,2,3]}
      />
      <Card
        title='In Rainbows'
        img = 'https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png'
        price = '20'
      />
    </div>
  );
}

export default App;
