function Text({n, color, text}){
    if(n==="h1") 
        return(  
        <a
        style={{
            color: {color},
            fontWeight: "300",
            fontSize: "96px",
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
                fontWeight: "300",
                fontSize: "60px",
                lineHeight: "72px",
                letterSpacing: "-0.5px"
                }}>
                {text}</a>
        );
  
    
    else if(n==="h3")
        return(
            <a 
            style={{
                color: {color},
                fontWeight: "500",
                fontSize: "48px",
                lineHeight: "56px",
                letterSpacing: "-0.5px"
                }}>
                {text}</a>
        );
        else if(n==="h4")
        return(
            <a 
            style={{
                color: {color},
                fontWeight: "500",
                fontSize: "34px",
                lineHeight: "36px",
                }}>
                {text}</a>
        );
        else if(n==="h5")
        return(
            <a 
            style={{
                color: {color},
                fontWeight: "500",
                fontSize: "28px",
                lineHeight: "24px",
                letterSpacing: "0.18px"
                }}>
                {text}</a>
        );
        else if(n==="h6")
        return(
            <a 
            style={{
                color: {color},
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "24px",
                letterSpacing: "0.15px"
                }}>
                {text}</a>
        );
        else if(n==="s1")
        return(
            <a 
            style={{
                color: {color},
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0.15px"
                }}>
                {text}</a>
        );
        else if(n==="s2")
        return(
            <a 
            style={{
                color: {color},
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "24px",
                letterSpacing: "0.1px"
                }}>
                {text}</a>
        );
        else if(n==="b1")
        return(
            <a 
            style={{
                color: {color},
                fontWeight: "500",
                fontSize: "20px",
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
                fontWeight: "500",
                fontSize: "18px",
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
                fontWeight: "700",
                fontSize: "18px",
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
                fontWeight: "500",
                fontSize: "15px",
                lineHeight: "16px",
                letterSpacing: "0.4px"
                }}>
                {text}</a>
        );
    return;
    
}

export default Text;