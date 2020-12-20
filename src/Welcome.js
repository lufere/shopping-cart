import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

function Welcome(props) {
  return (
    <div className='welcome'>
      <Link to='/shop'>ENTER</Link>
    
      {/* <button onClick={()=>props.history.push('/shop', {test:'works'})}>TEST</button> */}
    </div>
  );
}

export default Welcome;
