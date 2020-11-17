import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
import Toggle from './Components/Toggle'
import ProductReview from './Components/ProductReview';


function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div>
        
        <div className = "back-to-home">
         <Link to = "/">Back to Home</Link>
        </div>
        <div className = "details">
           <div className = "details-image">
               <img src = {product.image} alt = "product" ></img>
           </div>
           
           <div className = "details-info">
               <ul>
                   <li>
                       <h4>{product.name}</h4>
                   </li>
                   <li>
                       {product.rating} Stars ({product.numReviews} Reviews)
                   </li> 
                   <li>
                       <strong>Description: </strong>
                       <div className = "details-info">
                           {product.description}
                       </div>
                   </li>
                   <li>
                       <strong>Genre:</strong>
                       <div className = "details-info">
                           {product.genre}
                       </div>
                   </li>
                   <li>
                       <strong>Author details:</strong>
                       <div className = "details-info">
                       <Link to = {"/AuthorDetails/" + product._id}>Other books by the same author</Link>
                       </div>
                   </li>
                   <li>
                       <strong>Publisher:</strong>
                       <div className = "details-info">
                           {product.publisher}
                       </div>
                       <strong>Publication date:</strong>
                       <div className = "details-info">
                           {product.pubdate}
                       </div>
                   </li>
               </ul>
           </div>
           <div className = "details-action">
               <ul>
                   <li>
                       Price: <b>${product.price}</b>
                   </li>
                   <li>
                       Status: {product.status}
                   </li>
                   <li>
                       Qty: <select>
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                       </select>
                   </li>
                   <li>
                       <button className = "button">Add to Cart</button>
                   </li>
               </ul>
           </div>
        </div>
        <div className = "product-review">
               <ul>
                       <Toggle>
                           <ProductReview />
                       </Toggle>
               </ul>
           </div>
    </div>
    
}

export default ProductScreen;