import React from 'react'
import ProductListing from '../features/product-listing'
import data from '../data/products.json'

export default function Homepage(props){
    return <div> 
        <h1>
            Homepage
            <ProductListing products={data.products} />
        </h1>
    </div>
    
}