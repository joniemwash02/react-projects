import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
export default function StarRating({noOfStars=5}) {
    const [rating, setRating]=useState(0)
    const [hover, sethover]=useState(0);
    function handleclick(getCurrentIndex){
       setRating(getCurrentIndex)

    }
    function handleMouseEnter(getCurrentIndex){
        sethover(getCurrentIndex)

    }
    function handleMouseLeave(){
        sethover(rating)

    }
    return(
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index)=>{
                    index +=1;
                    return <FaStar 
                    key={index} 
                    className={index <=(hover || rating) ?'active': "inactive"}
                    onClick={()=>handleclick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    size={40}
                    />
                })
            }       
        </div>
    )
}