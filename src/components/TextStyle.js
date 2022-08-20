import styles from "./Font.module.css";

function TextStyle({n, color, text}){
    if(n==="h1") 
        return(  
        <h1 className={styles.kor}
        style={{
            color: color
            }}>
            {text}
        </h1>
        );
    if(n==="h2")
        return(
            <h2 className={styles.en}
            style={{color: color}}>{text}</h2>
        );
  
    
    if(n==="h3")
        return(
            <h3 className={styles.en}
            style={{color: color}}>{text}</h3>
        );
    return;
    
}

export default TextStyle;