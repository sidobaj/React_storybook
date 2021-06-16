import React from 'react';
import PropTypes from 'prop-types';
import './vote.css';
import { useState } from 'react';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export const Vote = ({backgroundColor = grey,}) =>{
    
    const [count , setCount] = useState(0);
    
    const upVote = () =>{
        setCount(count+1)
    }
    
    const downVote = () =>{
        if(count > 0){
            setCount(count-1)
        }
    }
    // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <>
        
        <div id="upVote" className="fa fa-thumbs-up primary_card"
            type="button"
            title='This answer is useful'
            style= {backgroundColor && { backgroundColor }}
            onClick= {upVote}
            style={{"width":"400px"}}
            // className = "triangle-up"
            // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            // style={backgroundColor && { backgroundColor }}
            // {...props}
        />
        {/* </div> */}
            {/* {label} */}
        <div className="main_count"
            style= {backgroundColor && { backgroundColor }}>
            {count}
        </div>
        <div id="downVote" className="fa fa-thumbs-down primary"
            type="button"
            title='This answer is not useful'
            // className="triangle-down"
            onClick={downVote}
        /> 
        
        </>
    )
}

// Vote.PropTypes =  {
//     /** 
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//     * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//    label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

Vote.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
  };