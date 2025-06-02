import React from 'react'

function ProductCard(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.item.img} class="card-img-top" alt="..." height={250} />
      <p class="card-text">{props.item.desc}</p>
      <p class="card-text">
        {props.item.isStock ? "in-stock" : "out-of-stock"}
      </p>
      <div class="card-body">
        <h5 class="card-title">{props.item.product_name}</h5>
        <p class="card-text">{props.item.desc}</p>
        <button class="btn btn-primary" onClick={() => { props.handleAddToCart(props.item);}} disabled={!props.item.isStock}>Add to cart</button>
        
      </div>
    </div>
  );
}

export default ProductCard;
