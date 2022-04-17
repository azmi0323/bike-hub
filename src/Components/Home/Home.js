import React, { useEffect, useState } from "react";
import Carousels from "../Carousels/Carousels";
import "./Home.css";
const Home = () => {

  const [products,setProducts]=useState([]);
  useEffect(()=>{
    fetch('product.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
console.log(products);
  return (
    <div>
      <Carousels></Carousels>
    </div>
  );
};

export default Home;
