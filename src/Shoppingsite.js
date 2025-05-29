import React, { useState } from 'react';
import "./Shoppingsite.css";
import ProductCard from './components/ProductCard';
import img1 from "./assets/sony.jpg"
import img2 from "./assets/iphone.jpg"
import img3 from "./assets/mi.jpg"
import img4 from "./assets/samsung.jpg"

function Shoppingsite() {
  const datas = [
    {id: 1,
      product_name: "SONY",
      price: 22000,
      desc: "To download drivers, firmware updates, BIOS, and software"
      img1: img1,
    },
    {id: 2,
      product_name: "APPLE",
      price: 10000,
      desc: "To download drivers, firmware updates, BIOS, and software"
      img1: img2,
    },
    {id: 3,
      product_name: "MI",
      price: 45000,
      desc: "To download drivers, firmware updates, BIOS, and software"
      img1: img3,
    },
    {id: 4,
      product_name: "SAMSUNG",
      price: 50000,
      desc: "To download drivers, firmware updates, BIOS, and software"
      img1: img4,
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  console.log(cartItems);
  
  return (
    <div className='container-fluid mainpage'>
      <div className='row'>
        <div className='left_section col-10'>
          <div classname="row">
            {datas.map((item) => {
              return(
              <ProductCard item={item} handleAddToCart={handleAddToCart} />
              );
              })}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Shoppingsite
