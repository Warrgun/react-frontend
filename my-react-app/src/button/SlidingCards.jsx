import React, {useState} from "react";
import Styles from "./button.module.css"
import PropTypes from "prop-types"

function SlidingCards({
    items = [],
}){
    let [id, setId] = useState(1);

    const swipeRight = () =>{
        if(id < items.length){
            setId(i => i+1);
        }
        else{
            setId(1)
        }  
    }

    const swipeLeft = () =>{
        if(id > 1){
            setId(i => i-1);
        }
        else{
            setId(items.length)
        } 
    }

    const currentItem = items.find( item => item.id === id);

    return(
            <div className={Styles.container}>
                <div>
                    {currentItem.comp}
                </div>
                <div className={Styles.buttonContainer}>
                    <button onClick={swipeLeft} className={Styles.buttonLeft}>swipe left</button>
                    <button onClick={swipeRight} className={Styles.buttonRight}>swipe right</button>
                </div>
            </div>
    );
}

SlidingCards.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        comp: PropTypes.element.isRequired
    })).isRequired
}

export default SlidingCards