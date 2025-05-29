import React from 'react'

function ProductCard(props) {
  return (
    <div class="card" style={{width: "18rem" }}>
         <img src={props.item.img} class="card-img-top" alt="..."> </img>
     <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <button class="btn btn-primary" onClick={() => {props.handleAddToCart(props.item);}}>Go somewhere</button> 
     </div>
    </div>
  );
}

export default ProductCard
