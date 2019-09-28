import React from 'react';

import products from '../../data/products.json';

export default function ProductListItem (props){
    console.log(products)
    return(<div className= 'product-listing-item'>
        <h3> {props.products.name} </h3>
        <img className= 'image-listing'
            alt= {props.products.name}
            height = {800}
            title = {props.products.name}
            src={`/products/${props.products.image}`}
        />
        
        <div>{props.products.description}</div>
        <div>{props.products.price}</div>
        <div>
            <button> Add to cart </button>
        </div>
         
    </div>)

}