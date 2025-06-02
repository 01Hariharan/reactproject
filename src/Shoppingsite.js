import React, { useState } from 'react';
import "./Shoppingsite.css";
import ProductCard from './components/ProductCard';
import img1 from "./assests/sony.jpg"
import img2 from "./assests/iphone.jpg"
import img3 from "./assests/mi.jpg"
import img4 from "./assests/samsung.jpg"

function Shoppingsite() {
  const datas = [
    {
      id: 1,
      product_name: "SONY",
      price: 22000,
      desc: "To download drivers, firmware updates, BIOS, and software",
      img: img1,
      isStock:true,
    },
    {
      id: 2,
      product_name: "APPLE",
      price: 100000,
      desc: "To download drivers, firmware updates, BIOS, and software",
      img: img2,
      isStock:true,
    },
    {
      id: 3,
      product_name: "MI",
      price: 45000,
      desc: "To download drivers, firmware updates, BIOS, and software",
      img: img3,
      isStock:false,
    },
    {
      id: 4,
      product_name: "SAMSUNG",
      price: 50000,
      desc: "To download drivers, firmware updates, BIOS, and software",
      img: img4,
      isStock:true,
    }
  ];

  const [cartItems, setCartItems] = useState([]);
  const[total, setTotal]=useState(0);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
    setTotal(total + product.price)
  }

  const handleRemoveFromCart = (item) => { 
    let filteredItems = cartItems.filter((citem) => citem.id !=item.id);
    setCartItems(filteredItems);
    setTotal(total-item.price)
  }


  return (
    <div className='container-fluid mainpage'>
      <div className='row'>
        <div className='left_section col-10'>
          <div className="row d-flex">
            {datas.map((item) => {
              return (
                <ProductCard item={item} handleAddToCart={handleAddToCart} />
              );
            })}
          </div>
        </div>
        <div className='right_section col-2'>
        <ol class="list-group list-group-numbered">
          {
            cartItems.map((citem) => {
              return (
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{citem.product_name}</div>
                    {citem.price}
                  </div>
                  <button class="badge text-bg-primary rounded-pill" onClick={()=>{handleRemoveFromCart(citem)}}>X</button>
                </li>
              );
            })
          }
          <h3>Total: {total}</h3>
        </ol>
      </div>
      </div>
    </div>
  
);
}

export default Shoppingsite
