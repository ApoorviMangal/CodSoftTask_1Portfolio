import React from 'react';
import "./PageTitle.css";

const PageTitle = (props) =>{
    return(
        <div className='pgTtl'> 
           <div><h3 >{props.title}</h3></div> 
        </div>
    )
}

export default PageTitle;