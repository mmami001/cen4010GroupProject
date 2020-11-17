import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';


function ProductReview(){

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    return(
        <li>
        {/* <h3>Write a customer review</h3> */}
            <ul className="form-container">
              <li>
                <label htmlFor="rating">Rating</label>
                <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          rating={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </Box>
              </li>
              <li>
                <label htmlFor="comment">Comment </label>
                <textarea
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </li>
              <li>
                <button type="submit" className="button primary">
                  Submit
                </button>
              </li>
            </ul>
        </li>
        
    )
}

export default ProductReview