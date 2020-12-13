import React from 'react';
import Header from './Header';
// import Card from './Card';
// import Header from './Header';
import Products from './Products';

function App() {
  return (
    <div>
      <Header
        cart={[1,2,3]}
      />
    </div>
  );
}

export default App;
