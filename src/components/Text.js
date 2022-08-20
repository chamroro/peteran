
function Text({n, color, text}){
    if(n==="h1") 
        return(  
        <a
        style={{
            color: {color},
            fontFamily: "'Noto Sans', sans-serif",
            fontWeight: "400",
            fontSize: "80px",
            lineHeight: "112px",
            letterSpacing: "-1.5px"
            }}>
            {text}
        </a>
        );
    else if(n==="h2")
        return(
            <a 
            style={{
                color: {color},
                
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "500",
                fontSize: "52px",
                lineHeight: "72px",
                letterSpacing: "-0.5px"
                }}>
                {text}</a>
        );
  
    

        else if(n==="h4")
        return(
            <a 
            style={{
                color: {color},
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "700",
                fontSize: "40px",
                lineHeight: "50px",
                }}>
                {text}</a>
        );
        else if(n==="h6")
        return(
            <a 
            style={{
                color: {color},
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "24px",
                }}>
                {text}</a>
        );
        else if(n==="s1")
        return(
            <a 
            style={{
                color: {color},
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "0.15px"
                }}>
                {text}</a>
        );
   
        else if(n==="b1")
        return(
            <a 
            style={{
                color: {color},
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "24px",
                letterSpacing: "0.5px"
                }}>
                {text}</a>
        );
        else if(n==="b2")
        return(
            <a 
            style={{
                color: {color},
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.25px"
                }}>
                {text}</a>
        );
        else if(n==="b3")
        return(
            <a 
            style={{
                color: {color},
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "300",
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.25px"
                }}>
                {text}</a>
        );
        else if(n==="B")
        return(
            <a 
            style={{
                color: {color},
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "16px",
                letterSpacing: "1.25px"
                }}>
                {text}</a>
        );
        else if(n==="c")
        return(
            <a 
            style={{
                color: {color},
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "16px",
                letterSpacing: "0.4px"
                }}>
                {text}</a>
        );
    return;
    
}

export default Text;