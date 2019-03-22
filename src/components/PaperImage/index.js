import React from "react";
import papers from "../../assets/papers.png";
import {Wrapper,Image} from "./styles";


const PaperImage =()=>{
    return(
        <Wrapper>
            <Image src={papers}/>
        </Wrapper>
    )
}
export default PaperImage;