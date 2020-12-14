import React from 'react';
import Header from './Header';
// import Card from './Card';
// import Header from './Header';
import Products from './Products';

function App(props) {
  return (
    <div>
      <Header
        cart={[1,2,3]}
      />
      <button onClick={()=>props.history.push('/products', {test:'works'})}>TEST</button>
    </div>
  );
}

export default App;
