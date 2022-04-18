import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {id} =useParams()
    const [products, setProducts] = useState({});
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
          const selected = data.find((item)=>(item.id==id))
         setProducts(selected)
         
      });
  }, [id]);
  console.log();
    return (
        <div className='container'>
            <img className='img-fluid' src={products?.img} alt="" />
            <h1>{products?.name}</h1>
            <p>{products?.body}</p>
        </div>
    );
};

export default CheckOut;