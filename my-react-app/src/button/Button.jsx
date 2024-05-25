import styles from "./button.module.css"

function Button(){

    const onClickHandler = (e) => e.target.textContent = "You just swiped!!!";

    return(
        <button onClick={(e) => onClickHandler(e)} className={styles.button}>swipe</button>
    );
}

export default Button