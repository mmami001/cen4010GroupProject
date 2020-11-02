import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function AuthorDetails(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div> 

<div className = "back-to-home">
         <Link to = "/">Back to Home</Link>
        </div>

        <h1>{product.author}</h1>

        <div>Author's bio: </div>

        <h2>Other books by {product.author}</h2>
        <div className = "book-list" />
        <ul>
        {data.products.filter(product => product.author ).map(filteredProduct => (
            <li>
        <h3>{filteredProduct.name}</h3>
            </li>
        ))}
        </ul>
         
        
        
       
        
    </div>
}

export default AuthorDetails;