import React from 'react'
import { Link } from 'react-router-dom'
import "./Mailto.css";

const Mailto = ({mailto, label}) => {
  return (
    <div className='email'>
    <Link to='yadav.vinita@gmail.com' onClick={(event) => {
        window.location.href = mailto;
        event.preventDefault();
    }}
    >
        {label}
    </Link>
    </div>
  );
}

export default Mailto;