import React, {useState} from "react";

function SlidingCards({
    items = [],
}){
    let [id, setId] = useState(1);

    const swipeRight = () =>{
        if(id < items.length){
            setId(id + 1);
        }
        else{
            setId(1)
        }  
    }

    const swipeLeft = () =>{
        if(id > 1){
            setId(id - 1);
        }
        else{
            setId(items.length)
        } 
    }

    const currentItem = items.find( item => item.id === id);

    return(
            <div>
                <button onClick={swipeLeft}>swipe left</button>
                <button onClick={swipeRight}>swipe right</button>
                <div>
                    {currentItem.id}
                </div>
            </div>
    );
}

export default SlidingCards